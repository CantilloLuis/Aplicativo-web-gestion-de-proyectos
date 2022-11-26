const express = require("express");
const router = express.Router();

const UserController = require("../controllers/users");

router.get("", UserController.getUser);
router.post("", UserController.addUser);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);



module.exports = router;