const mongoose = require("mongoose");

const BoardSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      require: true,
    },
  },
  {
    timestamp: true,
  }
);

const BoardModel = mongoose.model("boards", BoardSchema);

module.exports = BoardModel;
