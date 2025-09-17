const express = require('express')
const router = express.Router()

const loginController = require("../controller/LoginController")

router.get("/login", loginController.getLogin)
module.exports = router