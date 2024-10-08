const mogoose = require("mongoose");

const validateId = (req, res, next) => {
  const { id } = req.params;
  if (mogoose.Types.ObjectId.isValid(id)) {
    next();
  } else {
    next({
      message: "Invalid ID",
      statusCode: 400,
    });
  }
};

module.exports = validateId;
