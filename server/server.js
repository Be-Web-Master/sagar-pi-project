const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const serverless = require("serverless-http");
require('dotenv').config();
require("./dbConfig/dbConfig");

const { indexRouter } = require("./routes/indexRouter");
const app = express();
const { PORT } = process.env;

app.use(cors())
app.use(cookieParser());
app.use(express.json({ limit: '100mb' }));
app.use("/", indexRouter);


app.listen(PORT, ()=> {
    console.log(`Server running at PORT: ${PORT}`)
})

module.exports.handler = serverless(app);