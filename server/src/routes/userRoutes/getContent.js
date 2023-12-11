const express = require('express');
const router = express.Router();
const {getChapterContents} = require('../../controllers/courseHandler.js');

router.use((req,res,next)=>{
    next()
})

router.post("/",getChapterContents)

module.exports = router;