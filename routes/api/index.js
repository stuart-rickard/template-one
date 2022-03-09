const router = require("express").Router();
const exampleRoutes = require("./example-routes");

router.use("/comments", exampleRoutes);

module.exports = router;
