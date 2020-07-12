const express = require("express");
const router = express.Router();

router.use("/doctor", require("./doctors"));
// router.use("/user", require("./users"));

module.exports = router;