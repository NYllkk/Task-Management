// const User = require("../Database/modal/user.modal.js")
// const jwt = require("jsonwebtoken")
// const validate = require("validator")


// const signIn = async (req, res) => {
//     let { email, password } = req.body;
//     try {
//         let user = await findOne({ email })
//         if (!user) {
//             return (res.status(400)).send("email doesnt match");
//         }
//         user.comparePassword(password(error, match)=> {
//     if (!match || error) return (res.status(400), "inavlid")
// })
//     } catch (error) {
//     console.log(error)
// }
// }

const User = require("../Database/modal/user.modal.js");
const jwt = require("jsonwebtoken");
const validate = require("validator");

const signIn = async (req, res) => {
    let { email, password } = req.body;
    try {
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).send("Email doesn't match");
        }

        user.comparePassword(password, (error, match) => {
            if (error || !match) {
                return res.status(400).send("Invalid email or password");
            }
            const token = jwt.sign({ userId: user._id }, 'trgrtgyg56ygrgtrtg54y', { expiresIn: '1h' });
            res.status(200).send({
                token,
                username: user.username,
                email: user.email,
                password: user.password,
            });
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
};
module.exports = signIn;
