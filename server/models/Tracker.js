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
  assigndesc: {
    type: String,
    required: false,
    validate: /^[A-Za-z0-9 ]*$/
  },

  duedate: {
    type: Date,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },

  timedue: {
    type: Date,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  priority: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Tracker = mongoose.model("Tracker", trackerSchema);

module.exports = Tracker;
