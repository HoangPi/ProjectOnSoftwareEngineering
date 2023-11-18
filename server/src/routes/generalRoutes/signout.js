const express = require('express');
const router = express.Router();

router.use((req,res)=>{
    req.session.destroy()
    res.status(200).json({message:"Signed out"})
})


module.exports = router;