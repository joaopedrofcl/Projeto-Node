const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require("../models/Categoria")
const Categoria = mongoose.model('categorias')

router.get('/', function(req , res){
    res.render('admin/index')

})

router.get('/posts', function(req , res){
    res.send('Página de posts')
})

router.get('/categorias', function(req , res){
    res.render('admin/categorias')
})

router.get('/categorias/add' , function(req , res){
    res.render('admin/addcategorias')
})

router.post('/categorias/nova' , function(req , res){
    
    var erro = []
    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        erro.push({texto: 'Nome inválido'})
    }
    if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
        erro.push({texto: 'Slug inválido'})
    }

    if(req.body.nome.length < 2 ){
        erro.push({texto: 'Nome muito pequeno'})
    }
    
    if(erro.length > 0){
        res.render('addcategorias' , {erros: erros})
    }

   const novaCategoria = {
    nome: req.body.nome,
    slug: req.body.slug
   }

   new Categoria(novaCategoria).save().then(function(){
    console.log('categoria salva com sucesso')
   }).catch(function(err){
    console.log('Erro ao salvar categoria:'+err)
   })
})


module.exports = router