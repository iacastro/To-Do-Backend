const { Sequelize } = require('sequelize')

//Variables adquiridas den env

const database = process.env.DB_NAME;
const host = process.env.DB_HOST;
const userDb = process.env.DB_USERNAME;
const userPass = process.env.DB_PASSWORD;
const dialectDb = process.env.DB_DIALECT;
const port = process.env.DB_PORT;


/**
 * @param {String} database Nombre de la base de datos
 * @param {String} userDb Nombre de usuario de Postgres
 * @param {String} userPass Contrasena para acceder a la BD  
 */
const sequelize = new Sequelize(database,userDb,userPass, {
    host:host,
    port:port,
    dialect:dialectDb,
    dialectOption:{
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    define:{
        timestamps:true,
        freezeTableName:true
    }
});

sequelize.authenticate().then(()=>{
    console.log(`Database connected to discover`)
}).catch((err)=>{
    console.log(err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db;