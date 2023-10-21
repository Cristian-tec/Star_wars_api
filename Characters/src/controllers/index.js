const {catchAsync} = require('../utils/index')

module.exports={
    getCharacters: catchAsync(require('./getCharacters')),
    createCharacter: catchAsync(require('./createCharacter'))
}