const characters = require('./characters.json');

module.exports = {
    list: async () => characters ,
    edad: {msg: 'hola'},
    create: async () => {throw Error('Hubo un error en la BBDD al crear el personaje <<--')}
}