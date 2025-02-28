
const express = require('express');
const router = express.Router();

const {
    getMascotaLocal,
    getMascotaMongoDB,
    MascotaCreate,
    UpdateShowMascota,
    DeleteMascota,
    UpdateMascota,
    goHome,
    goNosotros,
    goCreateMascota,
    goUpdateMascota
} = require("../controller/controllerMascotas")

router.get("/", goHome);
router.get("/nosotros", goNosotros);
router.get("/Mascotas/crear", goCreateMascota);
router.get("/Mascotas/actualizar", goUpdateMascota);
router.get("/mascotas",getMascotaLocal );
router.get("/mascotas-MongoDB", getMascotaMongoDB);
router.post("/create-mascota", MascotaCreate);
router.get('/Mascotas/actualizar/:id', UpdateShowMascota);
router.delete("/Mascotas/eliminar/:id", DeleteMascota);
router.put("/Mascotas/actualizar/:id", UpdateMascota);

module.exports = router;