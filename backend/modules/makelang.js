const mongoose = require("mongoose");

const makeLang = new mongoose.Schema({
    lname:{
        type: String,
        required: true
    },
    lshort:{
        type: String,
        required: true
    },
    ldate:{
        type: String,
        required: true
    },
    ldesc:{
        type: String,
        required: true
    },
    llink:{
        type: String,
        required: true
    },
})

const Language = new mongoose.model("Language",makeLang);
module.exports = Language;