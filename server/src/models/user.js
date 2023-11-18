const mongoose = require("mongoose");

const userSchema= mongoose.Schema({
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
    accountid:{
        type:String,
        required:true,
    },
},{timestamps: true});

const User = mongoose.model('user',userSchema)
module.exports = User