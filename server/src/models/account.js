const mongoose = require("mongoose");

const accountSchema= mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type:String,
        required:true,
    },
},{timestamps: true});

const Account = mongoose.model('account',accountSchema)
module.exports = Account