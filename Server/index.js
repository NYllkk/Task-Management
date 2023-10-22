const express = require("express")
// const mongoose = require("mongoose")
const server = express()
require("../Database/db");
server.get("/",(req,res)=>{
    res.send("hello from backend")
})
// mongoose.connect("mongodb://127.0.0.1:27017/task").then(()=>{
// })
const port = 4000
server.listen(()=>{
    console.log("server is running",port )
})