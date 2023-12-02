const mongoose = require("mongoose");

const categorySchema= mongoose.Schema({
    categoryname:{
        type: String,
        required: true,
    },
},{timestamps: true});

const Category = mongoose.model('category',categorySchema)
module.exports = Category