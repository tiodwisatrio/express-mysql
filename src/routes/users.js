const express = require("express");

const UserController = require("../controller/usersController.js");

const router = express.Router();

// Create
router.post("/", UserController.createUser);

// Read
router.get("/", UserController.getAllUsers);

// Update
router.patch("/:id", UserController.updateUser);

// Delete
router.delete("/:id", UserController.deleteUser);

module.exports = router;
