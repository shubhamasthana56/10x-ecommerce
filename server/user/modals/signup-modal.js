const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: true,
        minLength: 10,
        maxLength: 10
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
});
const signupModal = mongoose.model("usersignup", signupSchema);
module.exports = signupModal;