const mongoose = require("mongoose");
// const Schema = mongoose.Schema();

const instructorSchema= mongoose.Schema({
    ID:{
        type: String,
        required: true,
    },
    fullname:{
        type: String,
        required: true,
    },
    dob:{
        type: Date,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
    },
},{timestamps: true});

const Intructor = mongoose.model('instructor',instructorSchema);
module.exports = Intructor;