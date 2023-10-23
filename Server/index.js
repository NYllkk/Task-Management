const express = require("express")
const server = express()
require("./Database/db");
server.get("/", (req, res) => {
    res.send("hello from backend")
})
const port = 4000
server.listen(() => {
    console.log("server is running", port)
})