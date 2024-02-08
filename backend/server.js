require("dotenv").config();

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp" }));

// <-- Database Connection -->
const datBase = require("./config/dataBase");
datBase();

// <-- Cloudinary Connection -->
const cloudinaryConnect = require("./config/cloudinary");
cloudinaryConnect();

// <-- Import Routes -->
const authRoutes = require("./routes/Auth.routes");
const profileRoutes = require("./routes/Profile.routes");

// <-- API Mount -->
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/profile", profileRoutes);

// <-- Server Start -->
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
