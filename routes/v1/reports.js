const express = require("express");
const router = express.Router();
const passport = require("passport");

const reportController = require("../../controllers/v1/reportController");

// route for make list of reports with specific status
router.get("/:status", passport.authenticate("jwt",{session:false}), reportController.statusAllReports);

module.exports = router;