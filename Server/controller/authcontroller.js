const User = require("../Database/modal/user.modal.js")
const jwt = require("jsonwebtoken");
const Validator = require("email-validator");
const express = require("express")
const router = express.Router()

// router.get("/auth/register", (req, res) => {
//     res.send("hare krishna");
// });

const signIn = async (req, res) => {
    let { email, password } = req.body;
    try {
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).send("Email doesn't match");
        }
        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
            return res.status(400).send("Invalid email or password");
        }

        const token = jwt.sign({ userId: user._id }, "kjrehfuir", { expiresIn: '1h' });
        res.status(200).send({
            token,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
};

const register = async (req, res) => {
    const { email, password, name } = req.body;
    console.log(req.body)
    try {
        if (!email) return res.status(400).send("Email is required");
        if (!Validator.validate(email)) {
            return res.status(400).send("Enter a valid email");
        }
        if (!password || password.length < 6) return res.status(400).send("Password is required");
        if (!name) return res.status(400).send("Username is not valid");

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).send("Email is taken");
        }

        const user = new User({
            email,
            password,
            name,
        });

        await user.save();
        return res.status(200).send(user);
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error creating a new user");
    }
};

module.exports = { signIn, register };
