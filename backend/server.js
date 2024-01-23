require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// <-- Database Connection -->
const datBase = require("./config/dataBase");
datBase();

// <-- Import Routes -->
const authRoutes = require("./routes/Auth.routes")


// <-- API Mount -->
app.use("/api/v1/auth", authRoutes);

// <-- Server Start -->
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
