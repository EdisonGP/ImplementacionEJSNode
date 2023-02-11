const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const mascotaSchema = new Schema({
  id_mascota:String,
  descripcion: String,
  fecha:String,
  valor_premio:String
});
const Premio=mongoose.model('Premio',mascotaSchema);

module.exports=Premio;