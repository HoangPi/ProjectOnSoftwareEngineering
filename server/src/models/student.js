const mongoose = require("mongoose");
// const Schema = mongoose.Schema();

const studentSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    courseID:{
        type: [],
        required: true,
    }
})

const Student = mongoose.model('student',studentSchema);
module.exports = Student;