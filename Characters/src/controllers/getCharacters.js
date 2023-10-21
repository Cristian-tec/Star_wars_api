const Characters = require('../data/index');
const {response} = require('../utils/index')

module.exports = async (req, res) => {
    //res.status(200).json(characters);
    //res.status(200).json(await Characters.list());
    response(res, 200, await Characters.list())
};

