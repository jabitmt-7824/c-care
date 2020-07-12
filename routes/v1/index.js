const express = require("express");
const router = express.Router();

router.use("/doctors", require("./doctors"));
// router.use("/user", require("./users"));

module.exports = router;