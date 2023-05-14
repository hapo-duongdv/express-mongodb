// import path from "path";
// import fs from "fs";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routers = require("./routes/index");

const mongoose = require("mongoose");
const compression = require("compression");
const helmet = require("helmet");
const morgan = require("morgan");

require("dotenv").config();
require("./database/mongo");

const app = express();
const { PORT = 3002, APP_URL } = process.env;

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("tiny"));

app.use(express.static("public"));

/**
 * Primary app routes.
 */
app.use("/", routers);

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
