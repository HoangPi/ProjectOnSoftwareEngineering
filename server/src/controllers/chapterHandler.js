const Chapter = require("../models/chapter.js")



function getChapters(req, res) {
    const courseId=req.body.courseId
    Chapter.find({course:courseId})
      .then(docs => {
        if (!docs) {
            
          return res.status(404).json({ message: "Chapter not found" });
        }
        res.status(200).json({ chapters:docs });
      })
      .catch(error => {
        console.error("Error fetching lesson:", error);
        res.status(500).json({ error: "Failed to fetch lesson" });
      });
  }
  module.exports = {
    getChapters,
}