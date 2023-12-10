const express = require('express');
const router = express.Router();
const {getLesson} = require('../../controllers/lessonHandler.js');

router.use((req,res,next)=>{
    next()
})

router.post("/",getLesson)

module.exports = router;