const express = require("express");


const GifController = require("../controllers/GifController");

const {
    notFoundHandler,
    authMiddleware,
    errorHandler,

} = require("../middlewares");

const GifRouter = express.Router();

GifRouter.get("/", GifController.getAllGifs);

GifRouter.get("/:id", authMiddleware, GifController.getGif, notFoundHandler);

GifRouter.post("/", authMiddleware, GifController.createGif, errorHandler);

module.exports = GifRouter;