const express = require("express");
const router = express.Router();

const v1ApiRoutes = require("./v1/index");

router.use('/v1', v1ApiRoutes); // if in any incoming request u see /v1, we are going to map it with v1 ApiRoutes.

module.exports = router;