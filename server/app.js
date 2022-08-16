// 'Import' the Express module instead of http
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const trackers = require("./routers/trackers");
// Initialize the Express application
const app = express();

dotenv.config();

const PORT = process.env.PORT || 4040; // we use || to provide a default value

mongoose.connect(process.env.MONGODB);

const db = mongoose.connection;

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

// add cors middleware

const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};


db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);
app.use(express.json());
app.use(logging);

// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  // Create the response body
  // End and return the response
  response.send(JSON.stringify({ message: "Service healthy" }));
});

app.get("/echo/:content", (request, response) => {
  // express adds a "params" Object to requests
  const content = request.params.content;
  // handle GET request for post with an id of "id"
  response.status(418).json({ echoed: content });
});

app.use("/trackers", trackers);

// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
