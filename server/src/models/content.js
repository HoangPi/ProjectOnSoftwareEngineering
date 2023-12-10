const mongoose = require("mongoose");

const contentSchema= mongoose.Schema({
    chapter:{
        type: mongoose.Types.ObjectId,
        ref: "chapter",
        required:true,
    },
    content:{
        type: String,
        required:true,
    }
},{timestamps: true});

const Content = mongoose.model('content',contentSchema)
module.exports = Content