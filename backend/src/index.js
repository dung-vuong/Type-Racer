// ./src/index.js

// ---------------- Import The Dependencies ---------------- \\
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { startDatabase } = require("./database/mongo");
const { insertAd, getAds } = require("./database/ads");
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const fetch = require('node-fetch');

// ---------------- Import The Dependencies ---------------- \\




//------------------------------------------------- CONNECT DATABASE ------------------------------------------------- \\
try{
	mongoose.connect(
		//password: goodgradepls
		"mongodb+srv://proj160:goodgradepls@cluster0.3t3w9l3.mongodb.net/TyperProj?retryWrites=true&w=majority",
		{useNewUrlParser: true, useUnifiedTopology: true}
	);
	console.log("Connected to Database Successfully!")
} catch (error) {
	console.log(error)
	console.log("Failed to Connect to Database!")
}
//------------------------------------------------- CONNECT DATABASE ------------------------------------------------- \\




// -------------------- Define and Use -------------------- \\
const app = express();
app.use(helmet());
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(cors());
app.use(morgan("combined"));
// -------------------- Define and Use -------------------- \\





// -------------- Routes for Sign Up - Sign In -------------- \\
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
// -------------- Routes for Sign Up - Sign In -------------- \\





//------------------------------------------------- COOKIES MANAGEMENT ------------------------------------------------- \\

//------------------------------------------------- COOKIES MANAGEMENT ------------------------------------------------- \\






// defining an array to work as the database (temporary solution)
// const ads = [{ title: "Hello, world (again)!" }];

app.get("/", async (req, res) => {
  res.send(await getAds());
});

app.get("/test", async (req, res) => {
  // res.send({ message: "test works" });
  res.send({ message: ["The", "cow", "jumps", "over", "the", "moon"] });
});

// defining an endpoint to return all ads
app.get("/get-words", async (req, res) => {
    res.send({ body: "According to all known laws of aviation, there is no way a bee should be able to fly. It's wings are too small to get its fat little body off the ground. The bee, of course, flies anyway, because bees don't care what humans think is impossible." });
});

// Get a list of random words, defaults to 300
app.get("/random-words", async (req, res) => {
  var number;

  //IF NUMBER FOUND
  if(req.query.number == null){
    number = 300;
  }
  else{
    number = req.query.number;
  }
  let letterCount = 0;
  var returnBody = new Object();
  const response = await fetch('https://random-word-api.herokuapp.com/word?number=' + number);
  //returnBody = JSON.parse(response);
  //returnBody.push({"words" : "10"});
  const letters = JSON.parse(number);

  
  const words = await response.json(); //extract JSON from the http response
  console.log(words);
  for(let i = 0; i < words.length; i++){
    letterCount += words[i].length;
    console.log(words[i].length);
  }
  let count = '{"letters":' + letterCount +'}';
  res.send({letterCount ,words});

});

app.listen(3001, () => {
  console.log("listening on port 3001");
});
