const mongoose = require("mongoose");

const teachSchema= mongoose.Schema({
    tutorid:{
        type: String,
        required: true,
    },
    thumbnail:{
        type: String,
        required: true,
    },
    coursename:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    level:{
        type: String,
        require: true,
    },
    description:{
        type: String,
        default:'Course Description',
    },
    studentsid:{
        type:[],
        required:true,
    },
},{timestamps: true});

const Teach = mongoose.model('teach',teachSchema)
module.exports = Teach