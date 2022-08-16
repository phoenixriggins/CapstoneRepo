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

router.get("/", (request, response) => {
  Tracker.find({}, (error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  Tracker.findById(request.params.id, (error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

router.get("/crust/:crust", (request, response) => {
  Tracker.find({ crust: request.params.crust }, (error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

router.delete("/:id", (request, response) => {
  Tracker.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Tracker.findByIdAndUpdate(
    request.params.id,

    {
      $set: {
        customer: body.customer,
        start: body.start,
        end: body.end,
        url: body.url,
        allDay: body.allDay
      }
    },

    {
      new: true,
      upsert: true
    },

    (error, record) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(record);
    }
  );
});

module.exports = router;
