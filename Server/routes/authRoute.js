// const express = require("express")
// const router = express.Router()
// const authController = require("../controller/authcontroller.js");



// // router.route("/signin").post(authController.signIn);s

// // router.route("/register").post(authController.register);
// router.get("/", (req, res) => {
//     res.send("hare krishna")
// })
// router.post("/register", authController.register);


const express = require("express");
const router = express.Router();
const authController = require("../controller/authcontroller.js");

router.get("/", (req, res) => {
    res.send("hare krishna");
});

router.post("/register", authController.register);
router.route("/signin").post(authController.signIn)
module.exports = router;
