const mongoose = require("mongoose");

const replySchema= mongoose.Schema({
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

const Reply = mongoose.model('reply',replySchema)
module.exports = Reply