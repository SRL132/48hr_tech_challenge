const { Schema, model } = require("mongoose");
const validator = require("validator");

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            trim: true,
            maxlength: [64, "Email length must not be longer than 64 characters"],
            validate: {
                validator: function (value) {
                    return validator.isEmail(value);
                },
                message: function (props) {
                    return `${props.value} is not a valid email`;
                },
            },
        },
    },
    { timestamps: true, versionKey: false },
);

const UserModel = model("users", userSchema);

module.exports = UserModel;