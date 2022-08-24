const mongoose = require("mongoose");

const trackerSchema = new mongoose.Schema({
  classname: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },

  assignmentname: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  assignmentdesc: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },

  duedate: {
    type: String
  },

  timedue: {
    type: String
  },
  priority: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Tracker = mongoose.model("Tracker", trackerSchema);

module.exports = Tracker;
