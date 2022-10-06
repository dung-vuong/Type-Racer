// ./src/index.js

// importing the dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { startDatabase } = require("./database/mongo");
const { insertAd, getAds } = require("./database/ads");

// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
const ads = [{ title: "Hello, world (again)!" }];

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
  res.send({ message: ["The", "cow", "jumps", "over", "the", "moon"] });
});

// defining an endpoint to return all ads
app.get("/GetWords", async (req, res) => {
    res.send({ body: "According to all known laws of aviation, there is no way a bee should be able to fly. It's wings are too small to get its fat little body off the ground. The bee, of course, flies anyway, because bees don't care what humans think is impossible." });
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
