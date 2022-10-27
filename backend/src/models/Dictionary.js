const mongoose = require("mongoose");

const DictionarySchema = new mongoose.Schema({
  numWords: {
    type: int,
    required: true,
  },
  dictionaryName: {
    type: String,
    required: true,
  },
  allWords: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
});

//module.exports = mongoose.model("dictionary", DictionarySchema);

const dictionaryModel = mongoose.model("dictionary", DictionarySchema);
module.exports = dictionaryModel;