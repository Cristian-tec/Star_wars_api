const Character = require('../data/index');
const {response, catchAsync} = require('../utils/index');


module.exports = async (req, res) => {
    
    //throw Error('Hubo un error al crear el personaje');
    const newCharacter = await Character.create();
    response(res, 201, newCharacter);

}
   /* try {
        throw Error('Hubo un error');
    } catch (error) {
        response(res, 400, {error: error.message})
    } */
    
    //res.status(200).send('Personaje creado');
    //response(res, 201, await Character.create());