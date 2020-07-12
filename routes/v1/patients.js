const express = require("express");
const router = express.Router();
const passport = require("passport");

const patientController = require("../../controllers/v1/patientController");

// route for patient registration
router.post("/register", passport.authenticate("jwt",{session:false}), patientController.patientRegister);

// route for report creation
router.post("/:id/create_report", passport.authenticate("jwt",{session:false}), patientController.createReport);

// route for make list of reports of a patient
router.get("/:id/all_reports", passport.authenticate("jwt",{session:false}), patientController.allReports);

module.exports = router;