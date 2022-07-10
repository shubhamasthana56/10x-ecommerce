const express = require("express");
const mongoose = require("mongoose");
const userController = require("./user/routes/user");
const orderController = require("./user/routes/orders");
const cartController = require("./user/routes/cart");
const itemController = require("./user/routes/items");
const multer = require("multer")();
const app = express();
const jwt = require("jsonwebtoken");
require('dotenv').config();
const cors = require("cors");
const uprotectedRoutes = ["/user/login", "/user/signup"];

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
app.use(cors());

// app.use((req, res, next)=> {
//     console.log(req.url);
//     uprotectedRoutes.forEach((route)=> {
//         if(req.url.includes(route)) {
//             next();
//         } else {
//             const user = jwt.verify(req.headers.authorization, process.env.SECRET_KEY)
//         }
//     });

//     // next()
//     // console.log(req.headers, "from middleware");
// });

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
app.use("/order", orderController);
app.use("/cart", cartController);
app.use("/item", itemController)