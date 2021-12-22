const express = require("express");
const { index, create } = require("../controllers/Book");


const router = express.Router();

router.route("/").get(index);
router.route("/").post(create);

module.exports = router;