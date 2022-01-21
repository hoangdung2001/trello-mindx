const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      require: true,
    },
  },
  {
    timestamp: true,
  }
);

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
