const express = require("express");
const bodyparser = require('body-parser');
const app = express();

// capturar body html
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//PUERTOS OCULTOS
require('dotenv').config()
const port = process.env.PORT; 

//Middleware
app.use(express.static(__dirname + "/public"));

//Conexion a BBDD
const mongoose = require('mongoose');
//const url=`mongodb+srv://veterinaria-mascotas:${process.env.PASSWORD}@cluster0.ocwwa.mongodb.net/${process.env.BBDD}?retryWrites=true&w=majority`;
const url = `mongodb://veterinaria-mascotas:${process.env.PASSWORD}@cluster0-shard-00-00.ocwwa.mongodb.net:27017,cluster0-shard-00-01.ocwwa.mongodb.net:27017,cluster0-shard-00-02.ocwwa.mongodb.net:27017/${process.env.BBDD}?ssl=true&replicaSet=atlas-attp1g-shard-0&authSource=admin&retryWrites=true&w=majority`;
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true
})
.then(()=>console.log('Base de datos conectada'))
.catch(e=>console.log(e))

// Motor de plantilla EJS
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//Rutas web
app.use('/', require('./Router/rutas'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

