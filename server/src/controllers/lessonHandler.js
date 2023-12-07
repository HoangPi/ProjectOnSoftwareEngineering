const Lesson = require("../models/lesson.js")



function getLesson(req, res) {
    const lessonId=req.body.lessonId
    Lesson.findOne({_id:lessonId})
      .then(docs => {
        if (!docs) {
            console.log("lessonId:",lessonId);
          return res.status(404).json({ message: "Lesson not found" });
        }
        
        res.status(200).json({ lesson:docs });
      })
      .catch(error => {
        console.error("Error fetching lesson:", error);
        res.status(500).json({ error: "Failed to fetch lesson" });
      });
  }

  module.exports = {
    getLesson,

}