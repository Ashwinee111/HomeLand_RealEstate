const express = require("express")
const app = express()
require("dotenv").config()

app.use(express.json())

const PORT = process.env.PORT || 4000

// Database Connection 
const datBase = require("./config/dataBase")
datBase()

// Server Start 
app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`);
})