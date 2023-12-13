const express = require('express');
const router = express.Router();
const {getAccounts} = require("../../controllers/accountHandler.js")

router.use((req,res,next)=>{
    next()
})

router.post("/",getAccounts)

module.exports = router;