const express = require("express");
const signupModal = require("../modals/signup-modal");
const checkExistingUser = require("../utility");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const salt = 10;

const secretKey = crypto.randomBytes(64).toString("hex");

const router = express.Router();

router.post("/login", (req, res)=> {
    signupModal.find({username: req.body.username}).then((userData)=> {
        if(userData.length) {
            bcrypt.compare(req.body.password, userData[0].password).then((val)=> {
                if(val) {
                    const authToken = jwt.sign(userData[0].username, secretKey);
                    res.status(200).send({authToken});
                } else {
                    res.status(400).send("Invalid Password");
                }
            })
        } else {
            res.status(400).send("Unauthorized user");
        }
    })
});

router.post("/signup", async (req, res)=> {
    if(await checkExistingUser(req.body.username)) {
        res.status(400).send("Username exist. Please try with different username");
    } else {
        bcrypt.genSalt(salt).then((saltHash)=> {
            bcrypt.hash(req.body.password, saltHash).then((passwordHash)=> {
                signupModal.create({username: req.body.username, phone_number: req.body.phoneNumber,
                    password: passwordHash})
                    .then(()=> { 
                        res.status(200).send(`${req.body.username} added successfully`); 
                    }).catch((err)=> {
                        res.status(400).send(err.message)
                })
            }).catch((err)=> {
                console.log(err)
            })
        }).catch((err)=> {
            console.log(err)
        })
        
    }
    
});

router.post("/logout", (req, res)=> {
    res.status(200).send("logout works");
});

module.exports = router;

