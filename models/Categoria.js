const Sequelize = require("sequelize")
const mysqlsenha = require('./senha')

const senhamysql = mysqlsenha.mysqlsenha
const sequelize = new Sequelize('projetonode', 'root', senhamysql , {
    host: 'localhost',
    dialect: 'mysql' 
    });

    const Categoria = sequelize.define('User', {
  
        nome: {
          type: DataTypes.STRING,
          allowNull: false
        },
        slug: {
          type: DataTypes.STRING,
          allowNull: false
        },
        date:{
            type: Date , 
            default: Date.now()
        }
      }, {
      });
