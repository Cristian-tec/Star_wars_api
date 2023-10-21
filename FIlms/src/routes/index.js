const { Router } = require("express");
const controllers = require("../controllers/index");
const { catchAsync } = require("../utils/index");
const middleware = require('../middlewares/index')

const router = Router();

//router.get("/", (req, res) => res.status(200).send("Hello World Films!"));
//router.use("/films", require("./filmsRouter"));

router.get("/", catchAsync(controllers.getFilms));
router.post("/", middleware.characterValidation, catchAsync(controllers.createPlanet));

module.exports = router;
