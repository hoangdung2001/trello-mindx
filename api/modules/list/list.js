const mongoose = require("mongoose");
const { Schema } = mongoose;
const ListSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    boardId: {
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

const ListModel = mongoose.model("lists", ListSchema);

module.exports = ListModel;
