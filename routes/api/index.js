const router = require("express").Router();
const temrRoutes = require("./temr-router");

router.use("/temr", temrRoutes);

module.exports = router;
