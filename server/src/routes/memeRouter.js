const express = require("express");


const MemeController = require("../controllers/MemeController");

const {
    notFoundHandler,
    authMiddleware,
    errorHandler,

} = require("../middlewares");

const MemeRouter = express.Router();

MemeRouter.get("/", MemeController.getAllMemes);

MemeRouter.get("/:id", authMiddleware, MemeController.getMeme, notFoundHandler);

MemeRouter.post("/", authMiddleware, MemeController.createMeme, errorHandler);

module.exports = MemeRouter;