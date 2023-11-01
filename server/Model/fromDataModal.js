const { mongoose } = require("mongoose");
const { Schema } = mongoose;
const formDataSchema = Schema({
  email: {
    require: true,
    type: String,
  },
  name: {
    require: true,
    type: String,
  },
  phone: {
    require: true,
    type: String,
  },
  admin: {
    type: Boolean,
    require: true,
  },
  profilePicture: {
    require: true,
    type: String,
  },
});
module.exports = mongoose.model("formData", formDataSchema);
