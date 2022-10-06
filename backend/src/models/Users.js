const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
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
