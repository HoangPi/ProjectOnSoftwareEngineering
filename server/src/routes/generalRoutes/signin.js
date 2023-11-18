const express = require('express');
const router = express.Router();
const {signIn} = require("../../controllers/accountHandler.js")

router.use((req,res,next)=>{
    next()
})

router.post("/",signIn)

module.exports = router;