const express = require("express");
const router = express.Router();

//Importar arquivo
const controllers = require("../controllers/moviesControllers");

//Rota do arquivo
router.get("/all", controllers.getALL);
router.post("/create", controllers.createMovie);

//exportar arquivo
module.exports = router;