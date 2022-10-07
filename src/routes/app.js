const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

const movieRoutes = require("./routes/moviesRoutes")
// Definir a rota principal do meu
app.use("/movies", movieRoutes);

module.exports = app;

