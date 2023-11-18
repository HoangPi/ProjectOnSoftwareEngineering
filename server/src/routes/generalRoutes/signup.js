const express = require('express');
const router = express.Router();
const {createAccount} = require("../../controllers/accountHandler.js")

// const mongoose = require("mongoose")
// const databseURI = require("../../database/databaseURI.js")

router.use((req,res,next)=>{
    next()
    // mongoose.connect(databseURI)
    //     .then(()=>next())
})

router.post("/",createAccount)

module.exports = router;