// add delete
const express = require("express");
const jwt = require("jsonwebtoken");
const cartModal = require("../modals/cart-modal");

const router = express.Router();

router.post("/add", (req, res)=> {
    console.log(req.headers.authorization, req.body);
    try {
        const username = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
        cartModal.create({username: username, item_id: req.body.itemid}).then(()=> {
            res.status(200).send("Item Added Sucessfully")
        }).catch((err)=> {
            res.status(400).send(err)
        });
    } catch(err) {
        res.status(400).send("User not authorized")
    }
    
});

router.get("/", (req, res)=> {
    try {
        const username = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
        cartModal.find({username: username}).then((cart)=> {
            res.status(200).send({cart: cart})
        })
    } catch(err) {
        res.status(400).send("User not authorized")
    }
})

router.delete("/remove/:id", (req, res)=> {
    cartModal.deleteOne({item_id: req.params.id}).then(()=> {
        res.status(200).send("Item removed Sucessfully")
    }).catch((err)=> {
        res.status(400).send(err)
    })
});

module.exports = router