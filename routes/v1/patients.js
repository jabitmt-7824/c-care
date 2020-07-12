const express = require("express");
const router = express.Router();
const passport = require("passport");

const patientController = require("../../controllers/v1/patientController");

router.post("/register", patientController.patientRegister);

module.exports = router;