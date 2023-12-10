const Comment = require('../models/comment.js')


function getComment(req,res){
    console.log("LessonIdd:",req.body.lessonid);
    Comment.find({lessonid:req.body.lessonid})
        .then(docs=>{
            if (!docs) {
                console.log("LessonId:",docs.lessonid);
              return res.status(404).json({ message: "Lesson not found" });
            }
            console.log("LessonID:",docs.content);
            res.status(200).json({comments:docs});
        })
        .catch(error => {
            console.error("Error fetching comments:", error);
            res.status(500).json({ error: "Failed to fetch comments" });
            });
    
}

function addComment(req,res){
    console.log(req.body)
    const comment = new Comment({
        content: req.body.content,
        userid: req.body.userid,
        lessonid: req.body.lessonid,
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

  module.exports = {
    getComment,
    addComment,
}