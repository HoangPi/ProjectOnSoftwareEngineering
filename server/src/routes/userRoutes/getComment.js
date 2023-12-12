const express = require('express');
const router = express.Router();
const {addComment,getReply,addReply,getAllCommentsAndReplies,editReply,deleteReply,editComment,deleteComment} = require('../../controllers/commentHandler.js');

router.use((req,res,next)=>{
    next()
})

router.post("/",getAllCommentsAndReplies)
router.post("/getreply",getReply)
router.post("/addcomment",addComment)
router.post("/addreply",addReply)
router.post("/editreply",editReply)
router.post("/deletereply",deleteReply)
router.post("/editcomment",editComment)
router.post("/deletecomment",deleteComment)

module.exports = router;