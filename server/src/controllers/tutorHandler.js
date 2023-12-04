const Tutor = require("../models/tutor.js")



function getTutor(req, res) {
    Tutor.find({})
      .then(docs => {
        res.status(200).json({ tutors:docs });
      })
      .catch(error => {
        console.error("Error fetching tutors:", error);
        res.status(500).json({ error: "Failed to fetch tutors" });
      });
  }

  module.exports = {
    getTutor,

}