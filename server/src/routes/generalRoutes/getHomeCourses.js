const express = require('express');
const router = express.Router();
const { getHomeCourse,getTutor } = require('../../controllers/courseHandler.js');

router.use((req,res,next)=>{
    next()
})

router.post("/",getHomeCourse)
router.post("/tutor",getTutor)
module.exports = router;