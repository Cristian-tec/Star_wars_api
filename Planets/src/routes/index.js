const { Router } = require("express");
const controllers = require('../controllers/index');
const {catchAsync} = require('../utils/index');
const middleware = require('../middlewares/index')

const router = Router();

//router.get("/", (req, res) => res.status(200).send("Hello Planets World"));
//router.use("/planets", require("./planetsRouter"));
router.get("/", catchAsync(controllers.getPlanets));
router.post("/", middleware.characterValidation, catchAsync(controllers.createPlanet));


module.exports = router;
