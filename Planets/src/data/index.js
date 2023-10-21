module.exports = {
  list: async () => require("./planets.json"),
  create: async () => { throw Error("Error en la BBDD al crear el planet")},
};

