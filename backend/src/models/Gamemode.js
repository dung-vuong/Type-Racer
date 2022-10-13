const mongoose = require("mongoose");

const GamemodeSchema = new mongoose.Schema({
  time: {
    type: int,
    required: true,
  },
  numWords: {
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