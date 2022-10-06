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
    type: Number, // the user that this stats belongs to
    required: true,
  },
});

module.exports = mongoose.model("stats", StatsSchema);
