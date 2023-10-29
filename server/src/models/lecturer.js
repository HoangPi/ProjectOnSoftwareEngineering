const mongoose = require("mongoose");
// const Schema = mongoose.Schema();

const lecturerSchema= mongoose.Schema({
    fullname:{
        type: String,
        required: true,
    },
    certifications:{
        type: [],
        required: true,
    }
},{timestamps: true});

const Lecturer = mongoose.model('lecturer',lecturerSchema);
module.exports = Lecturer;