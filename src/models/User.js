const mogoose = require("mongoose");

const userSchema = new mogoose.Schema({
    name: String,
    email: String,
    password: String,
    reserves: {
        type: mogoose.Schema.Types.ObjectId,
        ref: "Reserve",//nombre del modelo
    },
});

const User = mogoose.model("User", userSchema);

module.exports = User