const express = require('express');
const router = express.Router();
const {addUser} = require("../controllers/accountHandler.js")

router.use((req,res,next)=>{
    next()
})

router.post("/",addUser)

module.exports = router;