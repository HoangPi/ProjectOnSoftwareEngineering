const express = require('express');
const router = express.Router();
const { getTutor} = require('../../controllers/tutorHandler.js');

router.use((req,res,next)=>{
    next()
})

router.post("/",getTutor)
module.exports = router;