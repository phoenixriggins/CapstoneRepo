const mongoose = require("mongoose");

const trackerSchema = new mongoose.Schema({
  classname: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },

  assignmentname: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  assignmentdesc: {
    type: String,
    required: false,
    validate: /^[A-Za-z0-9 ]*$/
  },

  duedate: {
    type: String,
    required: true
  },

  timedue: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Tracker = mongoose.model("Tracker", trackerSchema);

module.exports = Tracker;
