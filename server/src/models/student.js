const mongoose = require("mongoose");
// const Schema = mongoose.Schema();

const studentSchema = mongoose.Schema({
    ID:{
        type: String,
        require: true,
    },
    fullname:{
        type: String,
        require: true,
    },
    gender:{
        type: String,
        require: true,
    },
    dob:{
        type: Date,
        require: true,
    },
    classID:{
        type: String,
        required: true,
    }
})

const Student = mongoose.model('student',studentSchema);
module.exports = Student;