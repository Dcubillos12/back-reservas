const { Router } = require("express");
const userController = require("../controllers/userController");
const reserveController = require("../controllers/reserveController");
const validateId = require("../middleware/validateId");

const router = Router();

router.get("/users", userController.getUsers);

router.post("/users", userController.createUser);

router.post("/users/login", userController.loginUser);

router.get("/users/:id", validateId, userController.getUserById);

router.put("/users/addReserve", userController.addReserve);

router.get("/reserves", reserveController.getAllReserves);

router.get("/reserves/:id", validateId, reserveController.getReserveById);

router.post("/reserves", reserveController.createReserve);

router.delete("/reserves/:id", validateId, reserveController.deleteReserve);

router.put("/reserves/:id", validateId, reserveController.updateReserve);

module.exports = router;
