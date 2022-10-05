const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  statsID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stats",
    required: false,
  },
  dictionaryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dictionary",
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("users", UserSchema);
