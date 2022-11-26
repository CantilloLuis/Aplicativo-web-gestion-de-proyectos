const mongoose = require("mongoose");
const user = mongoose.Schema({


    idUser: { type: Number, required: true }, 
    nameUser: { type: String, required: true },
    correo: { type: String, required: true }, 
    password: { type: String, required: true },   
    rol: { type: String, required: true },   


     
});

module.exports = mongoose.model("user", user);              