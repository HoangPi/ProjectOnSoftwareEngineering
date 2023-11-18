const mongoose = require("mongoose");

const tutorSchema= mongoose.Schema({
    avatar:{
        type:String,
    },
    email:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    titles:{
        type:[],
        required:true,
    },
    accountid:{
        type:String,
        required:true,
    },
},{timestamps: true});

const Tutor = mongoose.model('tutor',tutorSchema)
module.exports = Tutor