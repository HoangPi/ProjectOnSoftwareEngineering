const express = require('express');
const router = express.Router();
const { getHomeCourse } = require('../../controllers/courseHandler.js');

router.use((req,res,next)=>{
    next()
})

router.post("/",getHomeCourse)

module.exports = router;