const express = require("express");
const { userRouter } = require("./userRouter");
const { imageRouter } = require("./imageRouter");
const { isLoggedIn } = require("../middleware/isLoggedIn")

const indexRouter = express.Router();

indexRouter.use('/user', userRouter);
indexRouter.use('/image', isLoggedIn, imageRouter);

module.exports = {
    indexRouter
}