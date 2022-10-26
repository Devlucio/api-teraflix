const app = require("./src/app");
const PORT = 8000;

console.log("EXPRESS INSTANCIADO EXPORTADO DO ARQUIVO APP.JS", app);

//Meu objetivo: Inicializar o servido
    //Estruturar o básico do projeto para construir a API

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})    