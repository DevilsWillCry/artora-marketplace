const mysql = require("mysql2");

const conexion = mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"",
    database:"login_system"

});

conexion.connect((err) => {

    if(err){
        console.log(err);
    }else{
        console.log("MySQL conectado");
    }

});

module.exports = conexion;