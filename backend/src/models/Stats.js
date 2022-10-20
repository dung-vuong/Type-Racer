const mongoose = require("mongoose");

const StatsSchema = new mongoose.Schema({
  percentError: {
    type: double,
    required: false,
  },
  wordsPerMinute: {
    type: int,
    required: false,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId, // the user that this stats belongs to
    required: true,
  },
  gameMode_id: {
    type: mongoose.Schema.Types.ObjectId, // the gamemode that this  stats belongs to
    ref: "Gamemode",
    required: true,
  },
});

const statsModel = mongoose.model("stats", StatsSchema);
module.exports = statsModel;

//module.exports = mongoose.model("stats", StatsSchema);
