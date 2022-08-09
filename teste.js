const mysqlsenha = require("./senha")

const Sequilize = require("sequelize")
const sequelize = new Sequelize("teste" , "root" , mysqlsenha , {
    host: "localhost"
    dialect: "mysql"
})