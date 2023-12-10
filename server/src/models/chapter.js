const mongoose = require("mongoose");

const chapterSchema= mongoose.Schema({
    course:{
        type: mongoose.Types.ObjectId,
        ref: "teach",
        required:true,
    },
    name:{
        type: String,
        required:true,
    }
},{timestamps: true});

const Chapter = mongoose.model('chapter',chapterSchema)
module.exports = Chapter