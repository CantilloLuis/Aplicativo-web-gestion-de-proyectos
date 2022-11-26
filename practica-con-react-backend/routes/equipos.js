const express = require("express");
const router = express.Router();

const EquiposController = require("../controllers/equipos");

router.get("", EquiposController.getEquipo);
router.post("", EquiposController.addEquipo);
router.put("/:id", EquiposController.updateEquipo);
router.delete("/:id", EquiposController.deleteEquipo);



module.exports = router;