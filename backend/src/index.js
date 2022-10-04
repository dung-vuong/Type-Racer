// ./src/index.js

// importing the dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { startDatabase } = require("./database/mongo");
const { insertAd, getAds } = require("./database/ads");

mongoose.connect(
  //password: goodgradepls
  "mongodb+srv://proj160:goodgradepls@cluster0.3t3w9l3.mongodb.net/TyperProj?retryWrites=true&w=majority"
);

// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
// const ads = [{ title: "Hello, world (again)!" }];

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

// defining an endpoint to return all ads
app.get("/", async (req, res) => {
  res.send(await getAds());
});

app.post("/test", async (req, res) => {
  res.send({ message: "test works" });
});

// startDatabase().then(async () => {
//     await insertAd({title: 'Hello, now from the in-memory database!'});

//     // starting the server
//     app.listen(3001, () => {
//         console.log('listening on port 3001');
//     });

// });

// starting the server
app.listen(3001, () => {
  console.log("listening on port 3001");
});
