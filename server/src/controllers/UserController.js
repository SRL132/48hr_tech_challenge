const { UserModel } = require("../models");

require('dotenv').config();

async function createUser(req, res, next) {
    const { body } = req;
    const { password, email } = body;

    try {
        const { uid } = await auth.createUser({
            email,
            displayName: email,
            password,
        });

        const { createdAt, updatedAt, ...result } = (
            await UserModel.create({ uid, ...body })
        ).toJSON();

        res.status(201).send({
            success: true,
            data: result,
        });
    } catch (error) {
        next(error);
    }
}

async function updateUser(req, res, next) {
    const {
        params: { idUser },
        body: { uid, email, password, ...body },
    } = req;

    try {
        if (!Types.ObjectId.isValid(idUser)) {
            return res.status(400).send({
                success: false,
                message: "Wrong user ID",
            });
        }

        const result = await UserModel.findByIdAndUpdate(
            idUser,
            {
                $set: body,
            },
            {
                new: true,
                runValidators: true,
            },
        )
            .select("-createdAt -updatedAt")
            .lean()
            .exec();

        if (!result) return next();

        if (password) await auth.updateUser(result.uid, { password });

        res.status(200).send({
            success: true,
            data: result,
        });
    } catch (error) {
        next(error);
    }
}

async function getUser() {
    try {
        const result = await UserModel.find({})
            .select("-createdAt -updatedAt")
            .lean()
            .exec();

        if (!result) return next();

        res.status(200).send({
            success: true,
            data: result,
        });
    } catch (error) {
        next(error);
    }
}

async function signUp(req, res, next) {

    const { body } = req;

    console.log(body);

    const { password, email } = body;
    console.log(password, email);
    console.log("hello from signup");

    try {
        const res = await UserModel.create({
            email,
        });

    } catch (error) {
        next(error);
    }
}




module.exports = {
    createUser,
    updateUser,
    getUser,
    signUp,
};