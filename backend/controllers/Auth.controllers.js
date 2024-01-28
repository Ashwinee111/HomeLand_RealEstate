const User = require("../models/User.models");
const Otp = require("../models/Otp.models");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const mailSender = require("../utils/mailSender.utils");
const otpTemplate = require("../mails/emailVerificationTemplate");
const { passwordUpdated } = require("../mails/passwordUpdateTemplate");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");

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
    const otp = otpGenerator.generate(6, {
      specialChars: false,
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
    });

    // Check otp is unique or not
    // REMEBER: This code is not optimised because it going to Database to check the entry again and again
    let findeUniqueOtp = await Otp.findOne({ otp: otp });

    while (findeUniqueOtp) {
      otp = otpGenerator.generate(6, {
        specialChars: false,
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
      });
    }

    // Entery create in database
    const otpBody = await Otp.create({ email, otp });
    console.log(otpBody);

    await mailSender(email, "One Time Password", otpTemplate(otp));
    res.status(200).json({
      success: true,
      message: `OTP send successfully. Please check your ${email} email `,
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
    const { firstName, lastName, email, password, confirmPassword, otp } =
      req.body;

    // Data Validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !otp
    ) {
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
      return res.status(403).json({
        success: false,
        message: "User already exists",
      });
    }

    // Find the most recent OTP for the email
    const recentOtp = await Otp.find({ email })
      .sort({ createdAt: -1 })
      .limit(1);
    console.log(recentOtp);
    if (recentOtp.length === 0) {
      // OTP not found for the email
      return res.status(400).json({
        success: false,
        message: "OTP not Found",
      });
    } else if (otp !== recentOtp[0].otp) {
      // Invalid OTP
      return res.status(400).json({
        success: false,
        message: "OTP is Invalid",
      });
    }

    // Password Hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    // Entery create in database
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
    });

    res.status(200).json({
      success: true,
      user,
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
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation data
    if (!email || !password) {
      return res.status(403).json({
        success: false,
        message: "All fields must be required",
      });
    }

    // Checks user exits or not
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(403).json({
        success: false,
        message: "User not found",
      });
    }

    // Generate JWT, after matching password
    if (await bcrypt.compare(password, foundUser.password)) {
      const payload = {
        id: foundUser._id,
        email: foundUser.email,
      };
      const token = jwt.sign(payload, process.env.JWT_TOKEN_SECRET, {
        expiresIn: process.env.JWT_TOKEN_EXPIRY,
      });
      foundUser.token = token;

      // Create cookie and send response
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        foundUser,
        message: "Login successful",
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Password is incorrect",
      });
    }
  } 
  catch (error) {
    console.log(error.message),
      res.status(401).json({
        success: false,
        message: "Login failed",
      });
  }
};

// <-- Change Password Handler -->
exports.changePassword = async (req, res) => {
  try {
    // Get user data from req.user
    const userDetails = await User.findById(req.foundUser.id);

    // Get old password, new password, and confirm new password from req.body
    const { oldPassword, newPassword, confirmNewPassword } = req.body;

    // Validate old password
    const isPasswordMatch = await bcrypt.compare(
      oldPassword,
      userDetails.password
    );
    if (!isPasswordMatch) {
      // If old password does not match
      return res.status(403).json({
        success: false,
        message: "The password is incorrect",
      });
    }

    // Match new password and confirm new password
    if (newPassword !== confirmNewPassword) {
      // If new password and confirm new password do not match
      return res.status(403).json({
        success: false,
        message: "The password and confirm password does not match",
      });
    }

    // Update password
    const encryptedPassword = await bcrypt.hash(newPassword, 10);
    const updatedUserDetails = await User.findByIdAndUpdate(
      req.foundUser.id,
      { password: encryptedPassword },
      { new: true }
    );

    // Send notification email
    try {
      const emailResponse = await mailSender(
        updatedUserDetails.email,
        "Password updated successfully",
        passwordUpdated(
          updatedUserDetails.email,
          `Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
        )
      );
    } 
    catch (error) {
      // If there's an error sending the email
      return res.status(403).json({
        success: false,
        message: "Error occurred while sending email",
        error: error.message,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } 
  catch (error) {
    return res.status(401).json({
      success: false,
      message: "Error occurred while updating password",
      error: error.message,
    });
  }
};
