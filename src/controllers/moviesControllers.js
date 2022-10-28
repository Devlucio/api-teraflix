//Demanda: ver todos os filmes dinponíveis.

    //acessar o arquirvo de filmes que estão na pasta models arquivo movies.json.
const movies = require("../models/movies.json");

//Demanda: ver todos os filmes disponíveis
const getALL = (req, res) => {
    //Gerenciar o que acontece na  minha requisição e na resposta.
    res.status(200).send(movies)
    
};

const createMovie = (req, res) => {
//Acessar as informações que vem do body da req
     //Title
     //Genre
     console.log("Body da req", req.body)
     const title = req.body.title;
     const genre = req.body.genre;

     if (!title || !genre){
        return res.status(404).send({
            "Mensagem": "Informações imcompletas",
            "statusCode" : 404
        })
     };

//Construir um objeto com as informações do novo filme
     const newMovie = {
        "id": Math.random().toString(32).substring(2, 6),
        "addedAt": new Data(),
        "title": title,
        "genre": genre,
      }

      console.log("Novo fime", newMovie)
//Adicionar um novo filme a lista de filmes exitentes
movies.push(newMovie);

//Envio da resposta de filme cadastrado com sucesso 
res.status(201).send({
    "message" : "Novo filme adicionado com sucesso", newMovie
});     
};

module.exports = {
    getALL,
    createMovie
}