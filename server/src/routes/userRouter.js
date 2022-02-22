const express = require("express");

const { UserController } = require("../controllers");

const {
    notFoundHandler,
    authMiddleware,
    errorHandler,

} = require("../middlewares");

const UserRouter = express.Router();

UserRouter.get(
    "/",
    authMiddleware,
    UserController.getUser,
);

UserRouter.get(
    "/:idUser",
    authMiddleware,
    UserController.getUser,
    notFoundHandler,
);

UserRouter.post(
    "/",
    authMiddleware,
    UserController.createUser,
);

UserRouter.patch(
    "/:idUser",
    authMiddleware,
    UserController.updateUser,
    notFoundHandler,
);

UserRouter.delete(
    "/:idUser",
    authMiddleware,
    notFoundHandler,
);

UserRouter.get(
    "/:idUser/addresses",
    authMiddleware,
    notFoundHandler,
);

UserRouter.get(
    "/:idUser/addresses/:numAddress",
    authMiddleware,
    notFoundHandler,
);

UserRouter.post(
    "/:idUser/addresses/",
    authMiddleware,
    notFoundHandler,
);

UserRouter.post(
    "/signup",
    UserController.signUp,
    errorHandler

);


// UserRouter.use("/", notFoundHandler);

module.exports = UserRouter;