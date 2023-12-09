const Lesson = require("../models/lesson.js")



function getLesson(req, res) {
    const courseIdlesson=req.body.courseIdlesson
    const partlesson=req.body.partlesson
    Lesson.findOne({courseid:courseIdlesson,part:partlesson  })
      .then(docs => {
        if (!docs) {
            console.log("lsessonId:",Lesson._id);
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