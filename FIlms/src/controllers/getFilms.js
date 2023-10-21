const Films = require("../data/index");
const {response} = require('../utils/index')

module.exports = async (req, res) => {
  //res.status(200).json(await Films.list());
  response(res, 200, await Films.list())
};
