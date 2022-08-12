//baixando os modulos da aplicação
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const admin = require('./routes/admin')
const path = require('path')
//const Sequelize = require("sequelize")

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

    //Sequelize

    //Public
    app.use(express.static(path.join(__dirname , 'public')))

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
