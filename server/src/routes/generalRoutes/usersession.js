const express = require('express');
const router = express.Router();

router.use((req,res)=>{
    if(req.session.userinfo===null || typeof(req.session.userinfo)==='undefined'){
        res.status(402).json({message:"Session not found"})
    }
    else{
        res.status(200).json({userinfo:req.session.userinfo,role:req.session.role})
    }
    // next()
})

// router.post("/",createAccount)

module.exports = router;