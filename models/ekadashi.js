const mongoose = require("mongoose");

const ekadSchema = new mongoose.Schema({
    name: String,
    start: Date,
    end: Date,
});

module.exports = mongoose.model('Ekad', ekadSchema);
