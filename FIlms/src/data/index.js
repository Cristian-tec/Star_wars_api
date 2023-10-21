const films = require("./films.json");

module.exports = {
  list: async () => films,
  create: async () =>{ throw Error ('Error generado en la BBDD al crear films')}
};
