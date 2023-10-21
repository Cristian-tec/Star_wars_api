const Planets = require('../data/index');
const {response} = require('../utils/index')

module.exports = async (req,res) =>{
    const newPlanet= await Planets.create();
    //res.status(200).json(newPlanet)
    response(res, 200, newPlanet)
}