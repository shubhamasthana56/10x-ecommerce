const express = require("express");
const mongoose = require("mongoose");
const userController = require("./user/routes/user");
const multer = require("multer")();
const app = express();

//server
app.listen(3001, (err)=> {
    if(!err) {
        console.log("Server started at port 3001")
    } else {
        console.log(err);
    }
});
//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(multer.array());

//Database co
mongoose.connect("mongodb://localhost/ecommerce", (data)=> {
    console.log("Successfully connected to db");
}, (err)=> {
    console.log(err)
});

app.get("/", (req, res)=> {
    res.send("Ecommerce Backend")
});

//middleware
app.use("/user", userController);