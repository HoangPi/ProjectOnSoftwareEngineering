const User = require("../models/user.js")


function getStudent(req, res) {
    User.find({})
      .then(docs => {
        res.status(200).json({ students:docs });
      })
      .catch(error => {
        console.error("Error fetching student:", error);
        res.status(500).json({ error: "Failed to fetch students" });
      });
  }

  module.exports = {
    getStudent,
}