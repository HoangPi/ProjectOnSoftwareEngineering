const express = require('express');
const router = express.Router();
const {getComment,addComment} = require('../../controllers/commentHandler.js');

router.use((req,res,next)=>{
    next()
})

router.post("/",getComment)
router.post("/addcomment",addComment)

module.exports = router;