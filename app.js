//baixando os modulos da aplicação
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const admin = require('./routes/admin')
const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('connect-flash')

//Atribuindo a função express a constante app
const app  = express()



//Config

    //Session
    app.use(session({
        secret: 'projetonode' , 
        resave: true , 
        saveUninitialized: true
    }))
    app.use(flash())
    //middleware
    app.use(function(req , res , next){
        res.locals.success_msg = req.flash("sucess_msg")
        res.locals.error_msg = req.flash('error_msg')
        next()
    })

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
        next()
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
