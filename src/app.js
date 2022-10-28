// MODULE E REQUIRE
const express = require("express");
const app = express();

const cors = require("cors")

// instanciar o pacote
app.use(cors());
app.use(express.json())

const movieRoutes =require("./routes/moviesRoutes.js")

//Definir a rota pricipal do meu projeto
app.use("/movies", movieRoutes)

module.exports = app;