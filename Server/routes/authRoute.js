const express = require("express")
const router = express.Router()
const authController = require("../controller/authcontroller.js")
 


router.route("/signin").post (authController.signIn);

router.route("/register").post (authController.register);
module.exports = router;