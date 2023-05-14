const UserModel = require("../../models/user.model");
const UserController = require("../../controllers/user.constroller");
const express = require('express');
const router = express.Router();

router.post("/post", UserController.create);

router.get("/getAll", UserController.findAll);

router.get("/getOne/:id", UserController.findOne);

router.patch("/update/:id", UserController.update);

router.delete("/delete/:id", UserController.delete);

module.exports = router;
