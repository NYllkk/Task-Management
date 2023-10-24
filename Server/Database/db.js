const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/task";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(mongoURI, options)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
    });



