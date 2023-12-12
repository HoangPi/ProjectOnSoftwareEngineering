const Comment = require('../models/comment.js')
const Reply =  require('../models/reply.js')

function getComment(req,res){
    console.log("Fetch comments with chapter:",req.body.chapterid);
    Comment.find({chapterid:req.body.chapterid})
        .then(docs=>{
            if (!docs) {
                
              return res.status(404).json({ message: "CHapter not found" });
            }
            console.log("Chapter:",docs.content);
            res.status(200).json({comments:docs});
        })
        .catch(error => {
            console.error("Error fetching comments:", error);
            res.status(500).json({ error: "Failed to fetch comments" });
            });
    
}

async function getAllCommentsAndReplies(req, res) {
    try {
      const comments = await Comment.find({ chapterid: req.body.chapterid });
      const commentsWithReplies = [];
  
      for (let comment of comments) {
        const replies = await Reply.find({ commentid: comment._id });
        const commentWithReplies = {
          comment: comment,
          replies: replies.map((reply) => ({
            _id:reply._id,
            content: reply.content,
            userid: reply.userid,
            commentid: reply.commentid,
            updatedAt:reply.updatedAt,
            createdAt:reply.createdAt,
          })),
        };
        commentsWithReplies.push(commentWithReplies);
      }
  
      res.json({ comments: commentsWithReplies });
    } catch (err) {
      console.log(err);
      res.json({ message: err });
    }
  }

function addComment(req,res){
    console.log(req.body)
    const comment = new Comment({
        content: req.body.content,
        userid: req.body.userid,
        chapterid: req.body.chapterid,
    })
    comment.save()
        .then(() => {
            res.status(200).json({ message: "Comment created" });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: "Internal error" });
        });
}

function getReply(req,res){
    console.log("Fetch replys with comments:",req.body.commentid);
    Reply.find({commentid:req.body.commentid})
        .then(docs=>{
            if (!docs) {
              return res.status(404).json({ message: "Comment not found" });
            }
            
            res.status(200).json({replys:docs});
        })
        .catch(error => {
            console.error("Error fetching comments:", error);
            res.status(500).json({ error: "Failed to fetch comments" });
            });
    
}

function addReply(req,res){
    console.log(req.body)
    const reply = new Reply({
        content: req.body.content,
        userid: req.body.userid,
        commentid: req.body.commentid,
    })
    reply.save()
        .then(() => {
            res.status(200).json({ message: "Comment created" });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: "Internal error" });
        });
}

async function editReply(req, res) {
  const replyId = req.body.replyId;
  const updatedContent = req.body.content;
  try {
    const reply = await Reply.findById(replyId);

    if (!reply) {
      return res.status(404).json({ error: 'Reply not found.' });
    }

    reply.content = updatedContent;
    await reply.save();

    res.status(200).json({ message: 'Reply edited successfully.', updatedReply: reply });
  } catch (error) {
    console.error('Error editing reply:', error);
    res.status(500).json({ error: 'An error occurred while editing the reply.' });
  }
}
async function deleteReply(req, res) {
    const replyId = req.body.replyId;
  
    try {
      const reply = await Reply.findById(replyId);
  
      if (!reply) {
        return res.status(404).json({ error: 'Reply not found.' });
      }
      await reply.deleteOne();
      res.status(200).json({ message: 'Reply deleted successfully.' });
    } catch (error) {
      console.error('Error deleting reply:', error);
      res.status(500).json({ error: 'An error occurred while deleting the reply.' });
    }
  }

  async function editComment(req, res) {
    const commentId = req.body.commentId;
    const updatedContent = req.body.content;
    try {
      const comment = await Comment.findById(commentId);
  
      if (!comment) {
        return res.status(404).json({ error: 'Reply not found.' });
      }
  
      comment.content = updatedContent;
      await comment.save();
  
      res.status(200).json({ message: 'Reply edited successfully.', updatedContent });
    } catch (error) {
      console.error('Error editing reply:', error);
      res.status(500).json({ error: 'An error occurred while editing the reply.' });
    }
  }
  async function deleteComment(req, res) {
    const commentId = req.body.commentId;
      try {
        const comment = await Comment.findById(commentId);
        
        if (!comment) {
          return res.status(404).json({ error: 'Reply not found.' });
        }
        //const replies = await Reply.find({ commentid: commentId});
        //await replies.deleteMany();
        await comment.deleteOne();
        res.status(200).json({ message: 'Comment and replies deleted successfully.' });
      } catch (error) {
        console.error('Error deleting reply:', error);
        res.status(500).json({ error: 'An error occurred while deleting the reply.' });
      }
    }
  module.exports = {
    getComment,
    addComment,
    getReply,
    addReply,
    getAllCommentsAndReplies,
    editReply,
    deleteReply,
    editComment,
    deleteComment,
}