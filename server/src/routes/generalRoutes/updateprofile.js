const express = require('express');
const router = express.Router();
const {updateProfile} = require("../../controllers/accountHandler.js")

router.use((req,res,next)=>{
    next()
})

router.post("/",updateProfile)

module.exports = router;