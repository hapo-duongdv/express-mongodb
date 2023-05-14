const UserModel = require("../../models/user.model");
const UserController = require("../../controllers/user.constroller");
const UserMiddleware = require("../../middlewares/user");
const express = require("express");
const router = express.Router();

const { validateBodyCreate } = UserMiddleware;
const { create, update, findAll, findOne, softDelete } = UserController;

router.post("/post", validateBodyCreate, create);

router.get("/getAll", findAll);

router.get("/getOne/:id", findOne);

router.patch("/update/:id", update);

router.delete("/delete/:id", softDelete);

module.exports = router;
