const dotenv = require("dotenv");
dotenv.config();

const development = require("./config");


const ENV = process.env.NODE_ENV || "development";

const CONFIG = {
    development,
};

module.exports = CONFIG[ENV];