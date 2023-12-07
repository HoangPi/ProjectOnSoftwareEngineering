const express = require('express');
const router = express.Router();
const { getCategory} = require('../../controllers/categoryHandler.js');

router.use((req,res,next)=>{
    next()
})

router.post("/",getCategory)
module.exports = router;