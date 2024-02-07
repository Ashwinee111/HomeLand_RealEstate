require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

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
