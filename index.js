///importando o modulo express
const express = require("express")
// atribuindo a uma variavel o module express
const app = express()

// criando uma rota raiz para a nossa aplicação
app.get("/" , function(req,res){
    res.send('<h1>olá mundo</h1>')
})

//criando outra rota
app.get("/minha-rota" , function(req , res){
    res.send('<h1>Minha segunda rota</h1>')

})

//criando um parametro
app.get("/minha-rota/meu-parametro" , function(req , res){
    res.send('<h1>meu parametro</h1>')
})

//porta que está sendo ouvida
app.listen(8081 , function(){
    console.log('servidor rodando na porta http://localhost:8081')
});