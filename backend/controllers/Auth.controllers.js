const User = require("../models/User.models");
const bcrypt = require("bcrypt");

// <-- SignUp Handler -->
exports.signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    // Data Validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Password Validation
    if (password !== confirmPassword) {
      return res.status(403).json({
        success: false,
        message: "Passwords and ConfirmPassword are does not match",
      });
    }

    // User exists or not
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("Athi retun hauchi");
      return res.status(403).json({
        success: false,
        message: "User already exists",
      });
    }

    // Password Hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
    });

    res.status(200).json({
      success: true,
      message: "User created successfully",
    });
  } 
  catch (error) {
    console.log(error.message),
      res.status(401).json({
        success: false,
        message: "User created failed",
      });
  }
};
