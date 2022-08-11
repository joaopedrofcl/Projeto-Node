//baixando os modulos da aplicação
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
//const Sequelize = require("sequelize")

//Atribuindo a função express a constante app
const app  = express()

//Config

    //Body Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())

        //Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine' , 'handlebars')

        //Sequelize

//Rotas

//Outros

const PORT = 8081
app.listen(PORT , function(){
    console.log('Servidor rodando')
})
