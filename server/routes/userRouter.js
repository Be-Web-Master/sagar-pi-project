const express = require("express");
const {
  createUser,
  createCard,
  loginUser,
  getAllUser
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/create-user", createUser);
userRouter.post("/login-user", loginUser);
userRouter.post("/create-card-user", createCard);
userRouter.get("/getAlUser", getAllUser);
module.exports = { userRouter };
