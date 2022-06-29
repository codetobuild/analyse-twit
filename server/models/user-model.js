const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  twitterId: { type: String, required: true },
  token: { type: String, required: true, select: false },
  tokenSecret: { type: String, required: true, select: false },
  screenName: { type: String },
  profileImageUrl: { type: String },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
