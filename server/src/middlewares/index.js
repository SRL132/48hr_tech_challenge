const notFoundHandler = require("./notFoundHandler");
const errorHandler = require("./errorHandler");
const authMiddleware = require("./authMiddleware");


module.exports = {
    notFoundHandler,
    errorHandler,
    authMiddleware,
};