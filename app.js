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

const url = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ocwwa.mongodb.net/${process.env.BBDD}?retryWrites=true&w=majority&appName=Cluster0`;
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