const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

const PUERTO = process.env.PORT || 3000;

//rutas
let rutasPintores = require('./routes/pintor');

//web y hbs
const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));

//usar rutas
app.use('/', rutasPintores)

//conexion con mongo osi osi

mongoose.Promise = global.Promise;
const cadenamongo = 'mongodb+srv://usuarioExamen3parial:Z22xZLGvbcH4VrZn@4everaezequiel-tkmn2.mongodb.net/Examen?retryWrites=true&w=majority'
mongoose.connect(cadenamongo,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('Conexión establecida :D');
    }).catch(err=> console.log(err));

//arrancar servidor web
app.listen(PUERTO, ()=>{
    console.log('Escuchando el puerto...')
})