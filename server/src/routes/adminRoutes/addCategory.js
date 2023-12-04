const express = require('express');
const router = express.Router();
const { AddCategory } = require('../../controllers/categoryHandler.js');

router.use((req,res,next)=>{
    next()
})

router.post("/",AddCategory)

module.exports = router;