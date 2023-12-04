const express = require('express');
const router = express.Router();
const { getUserCouse } = require('../../controllers/courseHandler.js');

router.use((req,res,next)=>{
    next()
})

router.post("/",getUserCouse)

module.exports = router;