const mongoose = require("mongoose");

const commentSchema= mongoose.Schema({
    userid:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
    lessonid:{
        type:String,
        required:true,
    },
},{timestamps: true});

const Comment = mongoose.model('comment',commentSchema)
module.exports = Comment