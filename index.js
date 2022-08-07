const express = require("express")
const app = express()

app.get("/" , function(req,res){
    res.send('<h1>olá mundo</h1>')
}
)

app.listen(8081 , function(){
    console.log('servidor rodando na porta http://localhost:8081')
});