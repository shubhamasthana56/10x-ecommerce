const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    item_id: {
        type: String,
        required: true
    }
});
const cartModal = mongoose.model("cart", cartSchema);
module.exports = cartModal;
