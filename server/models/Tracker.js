const mongoose = require("mongoose");

const trackerSchema = new mongoose.Schema({});

const Tracker = mongoose.model("Tracker", trackerSchema);

module.exports = Tracker;
