///{username: "", order_id: "", order_type: "prepaid/postpaid", item_id: "", order_status: ""}
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    order_id: {
       type: String,
       required: true
    },
    order_type: {
        type: String,
        required: true
    },
    item_id: {
        type: String,
        required: true
    }
});
const orderModal = mongoose.model("order", orderSchema);
module.exports = orderModal;