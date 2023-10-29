const mongoose = require("mongoose");
// const Schema = mongoose.Schema();

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
        type: Number,
        required: true,
    },
    active:{
        type: Boolean,
        required: true,
    },
    recoveremail:{
        type: String,
        required: true,
    },
    userinfo:{
        type: String,
        required: true,
    }
},{timestamps: true});

const Account = mongoose.model('account',accountSchema);
module.exports = Account;