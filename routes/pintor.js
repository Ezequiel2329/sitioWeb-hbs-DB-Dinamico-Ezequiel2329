const express = require('express');

let pintor = require('../controllers/pintoresController.js');

//rutas
let router = express.Router();

router.get('/', pintor.list);

module.exports = router;

//experimento rutas uwu

router.get('/pintor1', (req, res)=>{
    res.render('pintor1', {
        titulo: 'Rembrandt Harmenszoon',
        autor: 'Vera Aguirre Ezequiel'
    });
});

router.get('/pintor2', (req, res)=>{
    res.render('pintor2', {
        titulo: 'Raffaello Sanzio',
        autor: 'Vera Aguirre Ezequiel'
    });
});

router.get('/pintor3', (req, res)=>{
    res.render('pintor3', {
        year: new Date().getFullYear(),
        titulo: 'John Singer',
        autor: 'Vera Aguirre Ezequiel'
    });
});

router.get('/pintor4', (req, res)=>{
    res.render('pintor4', {
        titulo: 'Juan Gris',
        autor: 'Vera Aguirre Ezequiel'
    });
});