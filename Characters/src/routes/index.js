const { Router } = require("express");

const controllers = require('../controllers/index');
const middlewares = require('../middlewares/index');

const router = Router();

/* router.get("/", (req, res) => res.status(200).send("Hello World Characters")); */

//router.use("/characters", require("./charactersRouter"));

router.get("/", controllers.getCharacters);
router.post("/", middlewares.characterValidation, controllers.createCharacter);

module.exports = router;
