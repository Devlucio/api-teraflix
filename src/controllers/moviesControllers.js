//DEMANDA: ver todos os filmes

// Acessar o arquivo de filmes
const movies = require("../models/movies.json");

const getAll = (req, res) => {
//gerenciar o que acontece na minha requisição e na resposta
res.status(200).send(movies);
};

const createMovie = (req, res) => {


};

module.exports = {
    getAll
}