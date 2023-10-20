const express = require('express');
const router = express.Router();
const {getAllPosts} = require("../controllers/postHandler.js")

router.use((req,res,next)=>{
    next()
})

router.post("/",getAllPosts)

module.exports = router;