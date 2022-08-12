const express = require('express')
const { Promise } = require('sequelize')
const router = express.Router()

router.get('/', function(req , res){
    res.render('admin/index')

})

router.get('/posts', function(req , res){
    res.send('Página de posts')
})

router.get('/categorias', function(req , res){
    res.send('Página de categoria')
})
module.exports = router