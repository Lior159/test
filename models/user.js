const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  isAdmin: Boolean,
  cart: {
    items: [],
  },
});

module.exports = mongoose.model("User", userSchema);
