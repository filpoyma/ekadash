const mongoose = require("mongoose");

const telSchema = new mongoose.Schema({
    number: String,
});

module.exports = mongoose.model('Tel', telSchema);
