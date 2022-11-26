const mongoose = require("mongoose");
const proyecto = mongoose.Schema({


  idProyecto: { type: Number, required: true }, 
  nombreProyecto: { type: String, required: true },
  descripcionProyecto: { type: String, required: true }, 
  url: { type: String, required: true }, 
  fecha: { type: String, required: true },   

     
});

module.exports = mongoose.model("proyecto", proyecto);
 