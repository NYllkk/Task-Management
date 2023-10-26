// const express = require("express")
// const server = express()
// require("./Database/db");
// const cors = require("cors")
// const morgan = require("morgan")
// const authRoutes = require("../Server/routes/authRoute.js")
// server.use(express.json())
// server.use(morgan("dev"))
// server.use(cors())
// server.get("/", (req, res) => {
//     res.send("hello from backend ")
// })


// server.use("/auth", authRoutes)


// // localhost:4000/auth/register




// const port = 4000
// server.listen(port, () => {
//     console.log("server is running", port)
// })


const express = require("express");
const server = express();
require("./Database/db");
const cors = require("cors");
const morgan = require("morgan");
const authRoutes = require("./routes/authRoute.js");

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
// server.use(express.raw({ limit: '50m' }))
// server.use(express.urlencoded({ extended: true }))

server.get("/", (req, res) => {
    res.send("Hello from the backend");
});

server.use("/auth", authRoutes);
// server.use("/register", authRoutes);

const port = 4000;
server.listen(port, () => {
    console.log("Server is running on port", port);
});
