const express = require('express');
const router = express.Router();
const {addLecturer} = require("../controllers/accountHandler.js")

router.use((req,res,next)=>{
    next()
})

router.post("/",addLecturer)

module.exports = router;