var express = require('express');
var router = express.Router();
var AccountController = require("../controller/AccountController");

/* GET home page. */
router.get("/", AccountController.getHome);

router.get("/login", AccountController.getLogin);

router.post("/login", AccountController.postLogin);

module.exports = router;
