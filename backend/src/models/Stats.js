const mongoose = require("mongoose");

const StatsSchema = new mongoose.Schema({
  percentError: {
    type: double,
    required: true,
  },
  wordsPerMinute: {
    type: int,
    required: true,
  },
  timeToComplete: {
    type: double,
    required: false,
  },
  wordsTyped: {
    type: int,
    required: false,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId, // the user that this stats belongs to
    required: true,
  },
  gamemode_id: {
    type: mongoose.Schema.Types.ObjectId, // the gamemode that this  stats belongs to
    ref: "gamemodeModel",
    required: true,
  },
});

const statsModel = mongoose.model("stats", StatsSchema);
module.exports = statsModel;

//module.exports = mongoose.model("stats", StatsSchema);
