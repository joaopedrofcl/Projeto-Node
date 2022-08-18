//baixando os modulos da aplicação
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const admin = require('./routes/admin')
const path = require('path')
//modulos do mongoose
const mongoose = require('mongoose')
//Atribuindo a função express a constante app
const app  = express()


//Config

    //Body Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())

    //Handlebars
        const hbs = handlebars.create({ defaultLayout:'main' });
        app.engine('handlebars', hbs.engine);
        app.set('view engine', 'handlebars')

    //Mongoose
    mongoose.Promise = global.Promise
    mongoose.connect('mongodb://localhost/blogapp').then(function(){
        console.log('Mongoose conectado com sucesso')
    }).catch(function(err){
        console.log('Erro ao se conectar'+err)
    })
      
    //Public
    app.use(express.static(path.join(__dirname , 'public')))
    app.use(function(req , res, next){
        console.log('Eu sou um middlware')
    })

//Rotas

app.get('/' , function(req , res){
    res.send('Pagina Principal do app')
})

app.get('/' , function(req  , res){
    res.send('Lista de Post')
})

app.use("/admin" , admin)

//Outros

const PORT = 8081
app.listen(PORT , function(){
    console.log('Servidor rodando')
})
