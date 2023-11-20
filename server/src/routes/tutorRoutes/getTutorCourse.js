const express = require('express');
const router = express.Router();
const { getTutorCouse } = require('../../controllers/courseHandler.js');

router.use((req,res,next)=>{
    next()
})

router.post("/",getTutorCouse)

module.exports = router;