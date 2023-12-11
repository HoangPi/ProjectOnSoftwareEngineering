const Content = require("../models/content.js")



function getContent(req, res) {
    const chapterId=req.body.chapterId
    Content.findOne({chapter:chapterId })
      .then(docs => {
        if (!docs) {
          
          return res.status(404).json({ message: "Content not found" });
        }
        res.status(200).json({ content:docs });
      })
      .catch(error => {
        console.error("Error fetching Content:", error);
        res.status(500).json({ error: "Failed to fetch Content" });
      });
  }
  module.exports = {
    getContent,
}