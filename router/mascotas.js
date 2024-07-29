const express = require('express')
const router = express.Router();

router.get("/", (req, res)=>{
    res.render('mascotas', { arrayMascotas: [
        {id: 'mas001', nombre: 'Rex', descripcion: 'Perro Pastor Aleman'},
        {id: 'mas002', nombre: 'Piolin', descripcion: 'Canario Cantor'},
        {id: 'mas003', nombre: 'Trueno', descripcion: 'Gato Persa'},
        {id: 'mas004', nombre: 'Tabata', descripcion: 'Perrita callejera'}
    ]});


    });

module.exports = router;