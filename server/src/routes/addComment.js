const express = require('express');
const router = express.Router();
const {addComment} = require("../controllers/postHandler.js")

router.use((req,res,next)=>{
    next()
})

router.post("/",addComment)

module.exports = router;