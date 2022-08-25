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
    Categoria.find().lean().then(function(categorias){
        res.render('admin/categorias' , {categorias: categorias})
    }).catch(function(err){
        req.flash('error_msg' , 'Houve um erro ao listar categorias')
        res.redirect('/admin')
    })
    
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
        res.render('admin/addcategorias' , {erros: erro})
    }else{
        const novaCategoria = {
            nome: req.body.nome,
            slug: req.body.slug
           }
           new Categoria(novaCategoria).save().then(function(){
            req.flash('success_msg' , 'Categoia criada com sucesso!')
            res.redirect('/admin/categorias')
           }).catch(function(err){
            req.flash('erro_msg' , 'Houve um erro ao salvar a categoria, tente novamente!')
            res.redirect('/admin')
           })
    }

})
    router.get('/categorias/edit/:id' , function(req , res){
        Categoria.findOne({_id:req.params.id}).lean().then(function(categoria){
            res.render('admin/editcategorias' , {categoria: categoria})
        }).catch(function(err){
            req.flash("error_msg" , "Esta categoria não existe")
            res.redirect('/admin/categorias')
        })
    })
module.exports = router