const mogoose = require("mongoose");

const reserveSchema = new mogoose.Schema({
  fecha: String,
  hora: String,
  mesa: String,
  user: {
    type: mogoose.Schema.Types.ObjectId,
    ref: "User"
  },
});

const Reserve = mogoose.model("Reserve", reserveSchema);
module.exports = Reserve;
