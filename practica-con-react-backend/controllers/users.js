const User = require("../models/user");

exports.getUser = (req, res) => {
    User.find().then((userResult) => {
    res.status(200).json(userResult);
  });
};

exports.addUser = (req, res) => {
  const userAdd = new User({


      idUser: req.body.idUser, 
      nameUser: req.body.nameUser,
      correo: req.body.correo,
      password: req.body.password,
      rol: req.body.rol,

    
  });

  userAdd.save().then((createdUser) => {
    console.log(createdUser);
    res.status(201).json("Creado satisfactoriamente");
  });
};





exports.updateUser=  async (req, res) => {

  try {

  const { idUser, nameUser, correo, password,rol} = req.body
  let user =  await User.findById(req.params.id)

  if(!user){
     res.status(404).json({msg: "No existe el user"})


  }
  user.idUser = idUser
  user.nameUser = nameUser
  user.correo = correo
  user.password = password
  user.rol = rol    



  user = await User.findByIdAndUpdate({_id: req.params.id}, user, {new: true})
  res.json(user)

  } catch (error){

          console.log(error)
          res.status(500).send("Error al actualizar el user")
  }
}




exports.deleteUser = (req, res)=>{
  const id = req.params.id;

  User.findByIdAndDelete(id)
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