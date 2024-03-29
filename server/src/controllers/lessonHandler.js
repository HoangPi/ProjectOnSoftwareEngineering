const Content = require("../models/content.js")



function getLesson(req, res) {
    const chapterId=req.body.chapterId
    const partn=req.body.partn
    console.log("Fetching chapterid",chapterId)
    Content.findOne({chapter:chapterId,part:partn  })
      .then(docs => {
        if (!docs) {
          
          return res.status(404).json({ message: "Content not found" });
        }
        res.status(200).json({ content:docs });
      })
      .catch(error => {
        console.error("Error fetching lesson:", error);
        res.status(500).json({ error: "Failed to fetch lesson" });
      });
  }
  module.exports = {
    getLesson,
}