const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://isagarjaiswal:1234@cluster0.b4jn2yr.mongodb.net/piProject?retryWrites=true&w=majority")
  .then(() => {
    console.log("db Connected");
  })
  .catch((error) => {
    console.log(error);
  });
