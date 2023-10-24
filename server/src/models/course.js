const mongoose = require("mongoose");
// const Schema = mongoose.Schema();

const courseSchema= mongoose.Schema({
    ID:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    credit:{
        type:Int8Array,
        required: true,
    },
    type:{
        type: Int8Array,
        required: true,
    }
},{timestamps: true});

const Intructor = mongoose.model('course',courseSchema);
module.exports = Intructor;