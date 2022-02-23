const { GifModel } = require("../models");


async function createGif(req, res, next) {
    const { item } = req.body;

    await GifModel.create({
        name: item.name,
        type: item.type,
        category: item.category,
        img: item.url,
    })
        .then(result => {
            res.status(201).send({
                success: true,
                data: result,
            });
        })
        .catch(error => {
            next(error);
        });
}

async function getGif(req, res, next) {
    const { params } = req;

    await GifModel.find()
        .then(result => {
            res.status(200).send({
                success: true,
                data: result,
            });
        })
        .catch(error => {
            next(error);
        });
}

async function getAllGifs(req, res, next) {
    await GifModel.find()
        .then(result => {
            res.status(200).send({
                success: true,
                data: result,
            });
        })
        .catch(error => {
            next(error);
        });
}

module.exports = {
    createGif,
    getGif,
    getAllGifs,
};
