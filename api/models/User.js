const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, min: 6, unique: true },
  password: { type: String, required: true, min: 6 },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
