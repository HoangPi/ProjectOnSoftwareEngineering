const express = require('express');
const router = express.Router();
const { getStudent} = require('../../controllers/studentHandler.js');

router.use((req,res,next)=>{
    next()
})

router.post("/",getStudent)
module.exports = router;