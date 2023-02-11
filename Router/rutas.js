
const express = require('express');
const router = express.Router();

const {
    getMascotaMongoDB,
    MascotaCreate,
    findMascotaById,
    DeleteMascota,
    UpdateMascota,
    createPremio,getPremiosByMascota
} = require("../controller/controllerMascotas")

router.get("/mascotas", getMascotaMongoDB);
router.post("/mascota", MascotaCreate);
router.get('/mascota/:id', findMascotaById);
router.delete("/mascota/:id", DeleteMascota);
router.put("/actualizar-mascota/:id", UpdateMascota);
router.post("/premio", createPremio);
router.get('/premios/:id', getPremiosByMascota);

module.exports = router;