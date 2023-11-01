const { mongoose } = require("mongoose");
const { Schema } = mongoose;
const userSchema = Schema({
  email: {
    require: true,
    unique: true,
    type: String,
  },
  role: {
    require: true,
    type: String,
  },
  username: {
    require: true,
    type: String,
  },
  password: {
    require: true,
    type: String,
  },
});
module.exports = mongoose.model("user", userSchema);
