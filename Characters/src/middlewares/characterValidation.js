const { ClientError } = require("../utils/errors/index");

module.exports = (req, res, next) => {
  const { name } = req.body;
  if (name) return next();
  else {
    // throw Error("Falta el nombre del personaje");
    throw new ClientError("Error en el nombre en teoria", 401);
  }
};
