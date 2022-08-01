const { Router } = require("express");
const Tracker = require("../models/Tracker");
const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newTracker = new Tracker(request.body);
  newTracker.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

module.exports = router;
