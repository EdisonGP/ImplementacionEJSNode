const Mascota = require('../models/mascota');
const Premio = require('../models/premio');

const goHome= async (req, res) => { //INICIO
    res.render("index", { titulo: "inicio EJS", texto: "NODE" });
  };
  
  const goNosotros= async(req, res) => { //NOSOTROS
    res.render("nosotros", { titulo: "Nosotros",texto:"NODE" });
  };

  const getMascotaLocal= async (req, res) => { //MASCOTAS DEFINIDOS LOCALMENTE
    res.render("mascotas", {
        arrayMascotas: [
          { id: "mas-01", nombre: "Rex", descripcion: "Mascota Rex" },
          { id: "mas-02", nombre: "P Aleman", descripcion: "Mascota Aleman" },
          { id: "mas-03", nombre: "Buldocer", descripcion: "Mascota Buldocer" }
        ]
      })
}
  
// Definiciones para datos en MONGODB

const getMascotaMongoDB= async (req, res) => { //MASCOTAS DESDE MONGO DB
    try {
        const arrayMascotasDB = await Mascota.find();
        res.render("mascotas-MongoDB", {
          arrayMascotas: arrayMascotasDB
        })
      } catch (e) { console.log(e) }
}

const MascotaCreate= async (req, res) => { //CREACION DE MASCOTAS
    const body = req.body
    // console.log(body)
     try {
       await Mascota.create(body)
       res.redirect('/mascotas-MongoDB')
   } catch (error) {
       console.log('error', error)
   }
}
const goCreateMascota= async(req, res) => { //REDIRECCIONA A CREAR MASCOTA
    res.render("crear");
  };
  
  const goUpdateMascota= async (req, res) => { //REDIRECCIONA A ACTUALIZAR MASCOTA
    res.render("actualizar");
  };

const UpdateShowMascota= async (req, res) => { //MUETRAS MASCOTAS EN INPUTS PARA ACTUALIZAR
    const id = req.params.id
    try {
        const mascotaDB = await Mascota.findOne({ _id: id })
      // console.log(mascotaDB)
        res.render('actualizar', {
            mascota: mascotaDB,
            error: false
        })
    } catch (error) {
        console.log(error)
        res.render('actualizar', {
            error: true,
            mensaje: 'No se encuentra el documento...'
        })
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
                mensaje: 'Eliminado!'
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
       // console.log(mascotaDB)
        res.json({
            estado: true,
            mensaje: 'Mascota actualizada'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Fallo en la actualizacion'
        })
    }
}

// ====== PREMIOS ==========
const createPremio= async (req, res) => { //CREACION DE PREMIO
    const body = req.body
   
     try {
       await Premio.create(body)
       res.json({
        message:"Premio creada correctamente"
       })
   } catch (error) {
       console.log('error', error)
   }
}

const getPremiosByMascota = async (req, res) => { //OBTENCION DE PREMIOS
    const id = req.params.id;
    try {
        const premios = await Premio.find({ id_mascota: id });
        res.json(premios);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener los premios");
    }
};


module.exports = {
    getMascotaLocal,
    getMascotaMongoDB,
    MascotaCreate,
    UpdateShowMascota,
    DeleteMascota,
    UpdateMascota,
    goHome,
    goNosotros,
    goCreateMascota,
    goUpdateMascota,
    createPremio,
    getPremiosByMascota
}