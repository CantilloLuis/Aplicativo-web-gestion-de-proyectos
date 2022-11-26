const Equipo = require("../models/equipo");

exports.getEquipo = (req, res) => {
  Equipo.find().then((equipoResult) => {
    res.status(200).json(equipoResult);
  });
};

exports.addEquipo = (req, res) => {
  const equipoAdd = new Equipo({


      idEquipo: req.body.idEquipo, 
      nombreEquipo: req.body.nombreEquipo,
      idProyecto: req.body.idProyecto, 
      fecha: req.body.fecha
   

  });

  equipoAdd.save().then((createdEquipo) => {
    console.log(createdEquipo);
    res.status(201).json("Creado satisfactoriamente");
  });
};





exports.updateEquipo =  async (req, res) => {

  try {

  const { idEquipo, nombreEquipo, idProyecto, fecha} = req.body
  let equipo =  await Equipo.findById(req.params.id)

  if(!equipo){
     res.status(404).json({msg: "No existe el equipo"})


  }
  equipo.idEquipo = idEquipo
  equipo.nombreEquipo = nombreEquipo
  equipo.idProyecto = idProyecto
  equipo.fecha = fecha


  equipo = await Equipo.findByIdAndUpdate({_id: req.params.id}, equipo, {new: true})
  res.json(equipo)

  } catch (error){

          console.log(error)
          res.status(500).send("Error al actualizar el equipo")
  }
}




exports.deleteEquipo = (req, res)=>{
  const id = req.params.id;

  Equipo.findByIdAndDelete(id)
      .then(data => {
          if(!data){
              res.status(404).send({ message : `Equipo con id no fue eliminado ${id}. el id es incorrecto`})
          }else{
              res.send({
                  message : "Equipo eliminada con exito!"
              })
          }
      })
} 