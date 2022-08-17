const mongoose = require("mongoose");

const trackerSchema = new mongoose.Schema({
  classname: {
    type: String,
    required: true
  },

  assignmentname: {
    type: String,
    required: true
  },
  assigndesc: {
    type: String,
    required: false
  },

  duedate: {
    type: Date,
    required: true
  },

  timedue: {
    type: Date,
    required: true
  },
  priority: {
    type: String
  }
});

const Tracker = mongoose.model("Tracker", trackerSchema);

module.exports = Tracker;
