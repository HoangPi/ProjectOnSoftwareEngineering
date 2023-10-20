const express = require('express');
const router = express.Router();
const {delete1} = require("../controllers/postHandler.js")

router.use((req,res,next)=>{
    next()
})

router.post("/",delete1)

module.exports = router;