const mongoose = require('mongoose');
const schema = mongoose.Schema;

const mascotaSchema = new schema({
    nombre: String,
    descripcion: String
})

/* creacion del modelo */
const Mascota = mongoose.model('mascota', mascotaSchema);
module.exports = Mascota;
