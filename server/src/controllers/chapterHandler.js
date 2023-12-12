const Chapter = require("../models/chapter.js")
const Teach =require("../models/teach.js")


async function getChapters(req, res) {
    const courseId=req.body.courseId
    const course = await Teach.findById(courseId);
    Chapter.find({course:courseId})
      .then(docs => {
        if (!docs) {
            
          return res.status(404).json({ message: "Chapter not found" });
        }
        res.status(200).json({ course:course,chapters:docs});
      })
      .catch(error => {
        console.error("Error fetching lesson:", error);
        res.status(500).json({ error: "Failed to fetch lesson" });
      });
  }
  module.exports = {
    getChapters,
}