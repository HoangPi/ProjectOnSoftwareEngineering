const mongoose = require("mongoose");
// const Schema = mongoose.Schema();

const classSchema= mongoose.Schema({
    ID:{
        type: String,
        required: true,
    },
    instructorID:{
        type: String,
        required: true,
    },
},{timestamps: true});

const Class = mongoose.model('class',classSchema);
module.exports = Class;