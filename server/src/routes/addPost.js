const express = require('express');
const router = express.Router();
const {addNew} = require("../controllers/postHandler.js")

router.use((req,res,next)=>{
    next()
})

router.post("/",addNew)

module.exports = router;