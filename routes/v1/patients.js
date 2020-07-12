const express = require("express");
const router = express.Router();
const passport = require("passport");

const patientController = require("../../controllers/v1/patientController");

router.post("/register", passport.authenticate("jwt",{session:false}), patientController.patientRegister);
router.post("/:id/create_report", passport.authenticate("jwt",{session:false}), patientController.createReport);
router.get("/:id/all_reports", passport.authenticate("jwt",{session:false}), patientController.allReports);

module.exports = router;