const Planets = require('../data/index');
const {response} = require('../utils/index')

module.exports = async (req,res)=>{
    //res.status(200).json(await Planets.list())
    response(res, 200, await Planets.list())
}