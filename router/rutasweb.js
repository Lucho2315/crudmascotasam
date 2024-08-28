const express = require('express')
const router = express.Router();
const Mascota = require('../models/mascota');	


router.get("/", async(req, res)=>{
    try {
        const countMascotas = await Mascota.countdocuments();
  //  console.log(countMascotas)
        res.render("index",{titulo:" Panel de Control", countMascotas: countMascotas
            
        });


    } catch (error) {
        console.log(error)
    }
});

/* enrutamiento */
//router.get('/', (req, res) => {
//    res.render('index', {titulo: "Bienvenido a Node.js con Express y con EJS"});
//})



module.exports = router;



