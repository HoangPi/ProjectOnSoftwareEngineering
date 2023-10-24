const mongoose = require("mongoose");
// const Schema = mongoose.Schema();

const classSchema= mongoose.Schema({
    ID:{
        type: String,
        required: true,
    },
    fullname:{
        type: String,
        required: true,
    },
    iID:{
        type: String,
        required: true,
    },
},{timestamps: true});

const Class = mongoose.model('class',classSchema);
module.exports = Class;