const express = require('express');
const router = express.Router();
const { registerCourse } = require('../../controllers/courseHandler.js');

router.use((req,res,next)=>{
    next()
})

router.post("/",registerCourse)

module.exports = router;