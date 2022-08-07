///importando o modulo express
const express = require("express")
// atribuindo a uma variavel o module express
const app = express()

// criando uma rota raiz para a nossa aplicação
app.get("/" , function(req,res){
    res.send('<h1>olá mundo</h1>')
}
)


app.listen(8081 , function(){
    console.log('servidor rodando na porta http://localhost:8081')
});