const { Schema, model } = require("mongoose");

const gifSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            unique: true,
            trim: true,
            maxlength: [64, "Name length must not be longer than 64 characters"],

        },
        type: {
            type: String,
            required: [true, "Type is required"],
        },
        category: {
            type: String,
            required: [true, "Category is required"],
        },
        img: {
            type: String,
            required: [true, "Img is required"],
        },
    },
    { timestamps: true, versionKey: false },
);

const GifModel = model("gifs", gifSchema);

module.exports = GifModel;