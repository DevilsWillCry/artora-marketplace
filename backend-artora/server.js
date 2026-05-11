const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");

const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("public"));



// REGISTRO
app.post("/register", async (req, res) => {

    const { nombre, email, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const sql = `
    INSERT INTO usuarios(nombre,email,password)
    VALUES(?,?,?)
    `;

    db.query(sql, [nombre,email,hash], (err,result) => {

        if(err){

            return res.json({
                success:false,
                mensaje:"Error al registrar"
            });

        }

        res.json({
            success:true,
            mensaje:"Usuario registrado"
        });

    });

});




// LOGIN
app.post("/login", (req,res) => {

    const { email, password } = req.body;

    const sql =
    "SELECT * FROM usuarios WHERE email=?";

    db.query(sql,[email], async (err,result) => {

        if(result.length === 0){

            return res.json({
                success:false,
                mensaje:"Usuario no encontrado"
            });

        }

        const usuario = result[0];

        const validPassword =
        await bcrypt.compare(
            password,
            usuario.password
        );

        if(!validPassword){

            return res.json({
                success:false,
                mensaje:"Contraseña incorrecta"
            });

        }

        res.json({
    success:true,
    mensaje:"Login correcto",
    nombre:usuario.nombre
        });

    });

});



app.listen(3000, () => {
    console.log("Servidor corriendo");
});