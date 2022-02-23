const { MemeModel } = require("../models");


function createMeme(req, res, next) {
    MemeModel.create(req.body)
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

function getMeme(req, res, next) {
    MemeModel.find()
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

async function getAllMemes(req, res, next) {
    if (req.query.categories.length > 0) {

        await MemeModel.find({ category: req.query.categories })
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
    else {
        await MemeModel.find()
            .then(result => {
                res.status(200).send({
                    success: true,
                    data: result,
                });
            }).catch(error => {
                next(error);
            });
    }
}

module.exports = {
    createMeme,
    getMeme,
    getAllMemes,
};