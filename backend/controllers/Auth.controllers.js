const User = require("../models/User.models");
const Otp = require("../models/Otp.models");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const mailSender = require("../utils/mailSender.utils");
const otpTemplate = require("../mails/emailVerificationTemplate");

// <-- Send OTP Handler -->
exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if User already exist
    const checkUserPresent = await User.findOne({ email });
    if (checkUserPresent) {
      return res.status(401).json({
        success: false,
        message: "User already registered",
      });
    }

    // Generate OTP
    let otp = otpGenerator.generate(6, {
      specialChars: false,
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
    });

    // Check otp is unique or not
    // REMEBER: This code is not optimised because it going to Database to check the entry again and again
    const findeUniqueOtp = await Otp.findOne({ otp: otp });

    while (findeUniqueOtp) {
      otp = otpGenerator.generate(6, {
        specialChars: false,
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
      });
      findeUniqueOtp = await Otp.findOne({ otp: otp });
    }

    // Otp an entery in database
    const otpBody = await Otp.create({ email, otp });
    console.log(otpBody);

    await mailSender(email, "One Time Password", otpTemplate(otp));
    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
      otp,
    });
  } 
  catch (error) {
    console.log(error.message);
    res.status(401).json({
      success: false,
      message: "OTP sending failed",
    });
  }
};

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

    // User an entery in database
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

// <-- Login Handler -->
// <-- Change Password Handler -->
