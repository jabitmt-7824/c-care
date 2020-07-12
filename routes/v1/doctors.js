const express = require("express");
const router = express.Router();

const doctorController = require("../../controllers/v1/doctorController");

// route for doctor registration
router.post("/register", doctorController.doctorRegistration);

// route for doctor's login
router.post("/login", doctorController.login);

module.exports = router;