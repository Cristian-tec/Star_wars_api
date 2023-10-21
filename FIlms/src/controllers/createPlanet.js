const Films = require('../data/index');
const response = require('../utils/index');

module.exports = async (req, res) =>{
    const newFilm = await Films.create();
    //res.status(200).json(newFilm)
    response(res, 200, newFilm);
}