const mongoose = require("mongoose");

const GamemodeSchema = new mongoose.Schema({
  // 1: 30 seconds
  // 2: 60 seconds
  // 3: 120 seconds
  // 4: 30 words
  // 5: 60 words
  // 6: 120 words
  gamemode: {
    type: int,
    required: true,
  },
  statsID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const gamemodeModel = mongoose.model("gamemode", GamemodeSchema);
module.exports = gamemodeModel;