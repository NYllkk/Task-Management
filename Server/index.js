const express = require("express")
const server = express()
require("./Database/db");
const cors = require("cors")
const authRoutes = require("./routes/authRoute.js")
server.get("/", (req, res) => {
    res.send("hello from backend")
})
server.use("auth",authRoutes)
const port = 4000
server.listen(() => {
    console.log("server is running", port)
})