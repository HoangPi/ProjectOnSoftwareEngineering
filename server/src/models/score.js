const mongoose = require("mongoose");
// const Schema = mongoose.Schema();

const classSchema= mongoose.Schema({
    ID:{
        type: String,
        required: true,
    },
    cID:{
        type: String,
        required: true,
    },
    sID:{
        type: String,
        required: true,
    },
    progressScore: Int8Array,
    finalScore: Int8Array,
    status:{
        type: String,
        required: true,
    }
},{timestamps: true});

const Class = mongoose.model('class',classSchema);
module.exports = Class;