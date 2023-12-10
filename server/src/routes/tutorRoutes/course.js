const express = require('express');
const router = express.Router();
const { updateCourse,getCourseDetail } = require('../../controllers/courseHandler.js');

router.use((req,res,next)=>{
    next()
})

router.post("/getcoursedetail",getCourseDetail)
router.post('/updatecourse',updateCourse)

module.exports = router;