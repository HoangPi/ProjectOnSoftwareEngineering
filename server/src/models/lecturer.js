const mongoose = require("mongoose");
// const Schema = mongoose.Schema();

const lecturerSchema= mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    qualification:{
        type: [],
        required: true,
    }
},{timestamps: true});

const Lecturer = mongoose.model('instructor',lecturerSchema);
module.exports = Lecturer;