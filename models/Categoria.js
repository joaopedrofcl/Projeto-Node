const mongoose = require('mongoose')
const Schema = mongoose.Schema
//criando categorias no banco de dados
const Categoria = new Schema({
    nome:{
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        Default: Date.now()
    }
})

mongoose.model("categorias", Categoria)
