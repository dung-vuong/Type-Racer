const mongoose = require("mongoose");

const StatsSchema = new mongoose.Schema({
  // 1: 30 seconds
  // 2: 60 seconds
  // 3: 120 seconds
  // 4: 30 words
  // 5: 60 words
  // 6: 120 words

  /*
  {
    "_id": {
        "$oid": "6360ca4cd784d95807aef237"
    },
    "percentError": 5,
    "wordsPerMinute": 60,
    "timeToComplete": 30
}
  */
  percentError: {
    type: Number,
    required: true,
  },
  wordsPerMinute: {
    type: Number,
    required: true,
  },
  timeToComplete: {
    type: Number,
    required: false,
  },
  wordsTyped: {
    type: Number,
    required: false,
  },
  // user_id: {
  //   type: mongoose.Schema.Types.ObjectId, // the user that this stats belongs to
  //   ref: 'User',
  //   required: true,
  // },
  user_email:{
    type: String,
    required: true,
  },
  gamemodeID:{
    type: Number,
    required: false,
  },
  gamemodeName:{
    type: String,
    required: false,
  },
  gamemode_id: {
    type: mongoose.Schema.Types.ObjectId, // the gamemode that this  stats belongs to
    //ref: "gamemodeModel",
    required: false,
  },
});

const statsModel = mongoose.model("stats", StatsSchema);
module.exports = statsModel;

//module.exports = mongoose.model("stats", StatsSchema);
