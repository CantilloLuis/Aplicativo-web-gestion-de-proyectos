const mongoose = require("mongoose");
/*const mongooseDateFormat = require('mongoose-date-format');*/

const equipo = mongoose.Schema({


  idEquipo: { type: Number, required: true }, 
  nombreEquipo: { type: String, required: true },
  idProyecto: { type: Number, required: true }, 
  fecha: { type: String, require: true   }, 

     
});
/*equipo.plugin(mongooseDateFormat);*/
module.exports = mongoose.model("equipo", equipo);
          