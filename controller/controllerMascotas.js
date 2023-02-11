const Mascota = require('../models/mascota');
const Premio = require('../models/premio');

// ====== MASCOTA ==========
const getMascotaMongoDB= async (req, res) => { //MASCOTAS DESDE MONGO DB
    try {
        const arrayMascotasDB = await Mascota.find();
        res.json(arrayMascotasDB)
      } catch (e) { console.log(e) }
}

const MascotaCreate= async (req, res) => { //CREACION DE MASCOTAS
    const body = req.body
     try {
       await Mascota.create(body)
       res.json({
        message:"Mascota creada correctamente"
       })
   } catch (error) {
       console.log('error', error)
   }
}

const findMascotaById= async (req, res) => { //MUETRAS MASCOTAS EN INPUTS PARA ACTUALIZAR
    const id = req.params.id
    try {
        const mascotaDB = await Mascota.findOne({ _id: id })
        res.json(mascotaDB)
    } catch (error) {
        console.log(error)
    }
}

const DeleteMascota= async (req, res) => { //ELIMINACION DE MASCOTAS
    const id = req.params.id;
  
    try {
        const mascotaDB = await Mascota.findByIdAndDelete({ _id: id });
  
        if (!mascotaDB) {
            res.json({
                estado: false,
                mensaje: 'No se puede eliminar'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'Mascota eliminado correctamente'
            })
        }
        
    } catch (error) {
        console.log(error)
    }
}


const UpdateMascota= async (req, res) => { //ACTUALIZACION DE MASCOTAS
    const body = req.body;
    const id = req.params.id;
  
    try {
        const mascotaDB = await Mascota.findByIdAndUpdate(id, body, { useFindAndModify: false })
        res.json({
            estado: true,
            mensaje: 'Mascota actualizada correctamente'
        })
    } catch (error) {
        console.log(error)
    }
}


// ====== PREMIOS ==========
const createPremio= async (req, res) => { //CREACION DE PREMIO
    const body = req.body
     console.log(body)
     try {
       await Premio.create(body)
       res.json({
        message:"Premio creada correctamente"
       })
   } catch (error) {
       console.log('error', error)
   }
}

const getPremiosByMascota= async (req, res) => { //PREMIOS DE LAS MASCOTAS
    const id = req.params.id;
    const premios=[]
    try {
        const premiosDB = await Premio.find();
        console.log()

        premiosDB.forEach(element => {
            console.log(element.id_mascota)
            if(element.id_mascota ==id) premios.push(element)
        });
        res.json(premios)
      } catch (e) { console.log(e) }
}




module.exports = {
    getMascotaMongoDB,
    findMascotaById,
    MascotaCreate,
    DeleteMascota,
    UpdateMascota,
    createPremio,
    getPremiosByMascota
}