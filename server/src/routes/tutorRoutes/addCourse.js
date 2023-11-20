const express = require('express');
const router = express.Router();
const { AddCourse } = require('../../controllers/courseHandler.js');

router.use((req,res,next)=>{
    next()
})

router.post("/",AddCourse)

module.exports = router;