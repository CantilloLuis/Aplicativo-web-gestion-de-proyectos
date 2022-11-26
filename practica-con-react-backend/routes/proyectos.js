const express = require("express");
const router = express.Router();

const ProyectosController = require("../controllers/proyectos");

router.get("", ProyectosController.getProyecto);
router.post("", ProyectosController.addProyecto);
router.put("/:id", ProyectosController.updateProyecto);
router.delete("/:id", ProyectosController.deleteProyecto);



module.exports = router;