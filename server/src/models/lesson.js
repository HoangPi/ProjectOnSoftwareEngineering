const mongoose = require("mongoose");

const lessonSchema= mongoose.Schema({
    courseid:{
        type: String,
        required: true,
    },
    content:{
        type:String,
        required:true,
    },
},{timestamps: true});

const Lesson = mongoose.model('lesson',lessonSchema)
module.exports = Lesson