const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    fullName: String,
    email: String,
    imageUrl: String,
    password: String
});

module.exports = mongoose.model('User', userSchema);
