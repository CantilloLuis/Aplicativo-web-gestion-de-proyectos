const Proyecto = require("../models/proyecto");

exports.getProyecto= (req, res) => {
  Proyecto.find().then((proyectoResult) => {
    res.status(200).json(proyectoResult);
  });
};

exports.addProyecto = (req, res) => {
  const proyectoAdd = new Proyecto({


      idProyecto: req.body.idProyecto, 
      nombreProyecto: req.body.nombreProyecto,
      descripcionProyecto: req.body.descripcionProyecto,
      url: req.body.url, 
      fecha: req.body.fecha
   

  });

  proyectoAdd.save().then((createdProyecto) => {
    console.log(createdProyecto);
    res.status(201).json("Creado satisfactoriamente");
  });
};





exports.updateProyecto =  async (req, res) => {

  try {

  const { idProyecto, nombreProyecto, descripcionProyecto, url, fecha} = req.body
  let proyecto =  await Proyecto.findById(req.params.id)

  if(!proyecto){
     res.status(404).json({msg: "No existe el proyecto"})


  }
  proyecto.idProyecto = idProyecto
  proyecto.nombreProyecto = nombreProyecto
  proyecto.descripcionProyecto = descripcionProyecto
  proyecto.url = url
  proyecto.fecha = fecha


  proyecto = await Proyecto.findByIdAndUpdate({_id: req.params.id}, proyecto, {new: true})
  res.json(proyecto)

  } catch (error){

          console.log(error)
          res.status(500).send("Error al actualizar el proyecto")
  }
}




exports.deleteProyecto = (req, res)=>{
  const id = req.params.id;

  Proyecto.findByIdAndDelete(id)
      .then(data => {
          if(!data){
              res.status(404).send({ message : `Proyecto con id no fue eliminado ${id}. el id es incorrecto`})
          }else{
              res.send({
                  message : "Proyecto eliminado con exito!"
              })
          }
      })
}