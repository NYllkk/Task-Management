// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

// const UserSchema = mongoose.Schema({
//     name: { type: String },
//     email: { type: String },
//     password: { type: String },
// });

// UserSchema.pre("save", function (next) {
//     let user = this;
//     if (user.isModified("password")) {
//         return bcrypt.hash(user.password, 12, function (err, hash) {
//             if (err) {
//                 return next(err);
//             }
//             user.password = hash;
//             return next();
//         });
//     } else {
//         next();
//     }
// });

// UserSchema.methods.comparePassword = function (password, next) {
//     bcrypt.compare(password, this.password, function (err, match) {
//         if (err) {
//             return next(err, false);
//         }
//         next(null, match);
//     });
// };

// const User = mongoose.model("User", UserSchema);
// module.exports = User;

























const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

UserSchema.pre("save", async function (next) {
    try {
        if (this.isModified("password")) {
            const hash = await bcrypt.hash(this.password, 12);
            this.password = hash;
        }
        next();
    } catch (error) {
        return next(error);
    }
});

UserSchema.methods.comparePassword = async function (password) {
    try {
        const match = await bcrypt.compare(password, this.password);
        return match;
    } catch (error) {
        throw error;
    }
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
