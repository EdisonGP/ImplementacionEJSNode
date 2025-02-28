<<<<<<< HEAD
=======

>>>>>>> 19be7979f43acdcbb630e6f62fa31920ec6c93ee
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
<<<<<<< HEAD
    goUpdateMascota,
    createPremio,
    getPremiosByMascota
=======
    goUpdateMascota
>>>>>>> 19be7979f43acdcbb630e6f62fa31920ec6c93ee
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
<<<<<<< HEAD
router.post("/create-premio", createPremio);
router.get('/premios/:id', getPremiosByMascota);
=======
>>>>>>> 19be7979f43acdcbb630e6f62fa31920ec6c93ee

module.exports = router;