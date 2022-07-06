const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    item_name: String,
    item_id: String,
    item_image: String,
    item_category: String,
    actual_price: Number,
    discounted_price: Number
});
const itemModal = mongoose.model("item", itemSchema);
module.exports = itemModal;