const mongoose = require("mongoose");

//debe ser uina funcion que va conecatr con mongo y va a requeirir mogoose

const dbCon = async() => {
  //realizar la conexion con la bd
  await mongoose.connect(
    "mongodb+srv://dcubillos12:w3Eqe9QDDrCcHOk3@prueba.ypvo5.mongodb.net/?retryWrites=true&w=majority",
  );
};
module.exports = dbCon;
