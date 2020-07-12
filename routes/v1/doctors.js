const express = require("express");
const router = express.Router();

const doctorController = require("../../controllers/v1/doctorController");

router.post("/register", doctorController.doctorRegistration);
router.post("/login", doctorController.login);

module.exports = router;