const mongoose = require("mongoose");
// const Schema = mongoose.Schema();

const courseSchema= mongoose.Schema({
    description: String,
    name:{
        type: String,
        required: true,
    },
    content:{
        type: Object,
        required: true,
    },
    category:{
        type: [],
        required: true,
    },
    lecturerID:{
        type: String,
        required: true,
    }
},{timestamps: true});

const Intructor = mongoose.model('course',courseSchema);
module.exports = Intructor;