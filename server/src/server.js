const config = require("./config");

const express = require("express");
const helmet = require("helmet");
const parser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const { UserRouter } = require("./routes");
const { MemeRouter } = require("./routes");
const { GifRouter } = require("./routes");

const { errorHandler } = require("./middlewares");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(parser.json());


app.use("/user", UserRouter);
app.use("/meme", MemeRouter);
app.use("/gif", GifRouter);


app.use(errorHandler);

module.exports = app;