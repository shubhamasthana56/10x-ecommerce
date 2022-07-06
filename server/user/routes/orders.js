const express = require("express");
const orderModal = require("../modals/order-modal");

const router = express.Router();

router.post("/add", (req, res)=> {
    ///{username: "", order_id: "", order_type: "prepaid/postpaid", item_id: "", order_status: ""}
    orderModal.create({username: req.body.username, order_id: req.body.orderid, order_type: req.body.ordertype
    ,item_id: req.body.itemid}).then(()=> {
        res.status(200).send("Older placed Successfully")
    }).catch((err)=> {
        res.status(400).send(err)
    })
});

router.delete("/cancel/:id",(req, res)=> {
    orderModal.deleteOne({order_id: req.params.id}).then(()=> {
        res.status(200).send("Order Cancelled Sucessfully")
    }).catch((err)=> {
        res.status(400).send(err) 
    });
});

module.exports = router;