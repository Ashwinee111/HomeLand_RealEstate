const mongoose = require("mongoose");
require("dotenv").config();

const dataBase = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("DataBase Connected Successfully"))
    .catch((error) => {
      console.log(error.message);
      console.log("DataBase Connected Failed")
      process.exit(1);
    });
};

module.exports = dataBase;
