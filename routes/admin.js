const express = require('express')
const router = express.Router()

router.get('/', function(req , res){
    res.send('Página principal do painel ADM')
})

router.get('/posts', function(req , res){
    res.send('Página de posts')
})

router.get('/categorias', function(req , res){
    res.send('Página de categoria')
})
module.exports = router