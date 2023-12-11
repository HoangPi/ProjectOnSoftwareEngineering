const express = require('express');
const router = express.Router();
const { getUserCouse } = require('../../controllers/courseHandler.js');
const { getChapters} = require('../../controllers/chapterHandler.js')
router.use((req,res,next)=>{
    next()
})

router.post("/",getUserCouse)
router.post("/getchapters",getChapters)
module.exports = router;