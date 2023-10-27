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
        type: Int8Array,
        required: true,
    },
    active:{
        type: Boolean,
        required: true,
    },
    recoveremail: String,
},{timestamps: true});

const Account = mongoose.model('class',accountSchema);
module.exports = Account;