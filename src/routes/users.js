const express = require("express");

const UserController = require("../controller/usersController.js");

const router = express.Router();
router.get("/", UserController.getAllUsers);

// Create
router.post("/", UserController.createUser);


router.patch("/", UserController.updateUser);
router.delete("/", UserController.deleteUser);

module.exports = router;
