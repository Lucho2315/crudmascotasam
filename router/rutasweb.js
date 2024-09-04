const express = require('express');
const router = express.Router();
const Mascota = require("../models/mascota");
const Servicio = require("../models/servicio");

router.get("/", async (req, res) => {
    try {
        // Realiza ambas consultas en paralelo
        const [countMascotas, countServicios] = await Promise.all([
            Mascota.countDocuments(),
            Servicio.countDocuments()
        ]);

        // Renderiza la vista pasando ambos valores
        res.render('index', {
            titulo: "Panel de Control",
            countMascotas: countMascotas,
            countServicios: countServicios
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Ocurrió un error al cargar el panel de control.");
    }
});

module.exports = router;

