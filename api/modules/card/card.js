const mongoose = require("mongoose");
const { Schema } = mongoose;
const CardSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    boardId: {
      type: String,
    },
    listId: {
      type: String,
    },
    order: {
      type: Number,
    },
  },
  {
    timestamp: true,
  }
);

const CardModel = mongoose.model("cards", CardSchema);

module.exports = CardModel;
