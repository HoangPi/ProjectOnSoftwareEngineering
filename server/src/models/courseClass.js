const mongoose = require("mongoose");
// const Schema = mongoose.Schema();

const courseclassSchema = mongoose.Schema({
    ID:{
        type: String,
        require: true,
    },
    name:{
        type: String,
        require: true,
    },
    semestry:{
        type: String,
        required: true,
    },
    cID:{
        type: String,
        required: true,
    },
    iID:{
        type: String,
        required: true,
    },
    students: [],
    status:{
        type: Int8Array,
        required: true,
    },
})

const courseClass = mongoose.model('courseClass',courseclassSchema);
module.exports = courseClass;