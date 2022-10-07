const app = require("./src/app");
const PORT = 8000;

console.log("Express instanciado exportado do arquivo app.js", app)

//Meu objetivo: Inicializar um servidor
//Estruturar o básico do projeto para construir a API.

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
});
