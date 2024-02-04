const User = require('("../models/User.models")');
const mailSender = require("../utils/mailSender.utils");
const bcrypt = require("bcrypt");

// <-- ForgetPassword Token Handler -->
exports.forgetPasswordToken = async (req, res) => {
  try {
    // Get email from req.body
    const { email } = req.body;

    // Check if user is present or not, email validation
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      return res.status(401).json({
        success: false,
        message: "Your Email is not registered with us",
      });
    }

    // Generate ForgetPasswordToken
    const forgetPasswordToken = crypto.randomUUID();

    // Update user by adding ForgetPasswordToken and Expiration time
    await User.findOneAndUpdate(
      { email: email },
      {
        token: forgetPasswordToken,
        frogetPasswordExpires: Date.now() + 5 * 60 * 1000,
      },
      { new: true }
    );

    // Create ForgetPassword url link
    const forgetPasswordUrl = `http://localhost:5173/forget-password/${forgetPasswordToken}`;

    // Send mail
    await mailSender(
      email,
      "Forget Passwor Link",
      `Forget Passwor link: ${forgetPasswordUrl}`
    );

    return res.status(200).json({
      success: true,
      message: "Email sent successfully, Please check your email",
    });
  } 
  catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while the forget password token was sent",
    });
  }
};



// <-- ForgetPassword Handler -->
exports.forgetPassword = async (req, res) => {
  try {
    const { token, password, confirmPassword } = req.body;

    // Validation
    if (password !== confirmPassword) {
      return res.status(401).json({
        success: false,
        message: "Password is not match",
      });
    }

    // Get userDetails from DB using token
    const userDetails = await User.findOne({ token: token });

    // If no entry - token is invaild
    if (!userDetails) {
      return res.status(400).json({
        success: false,
        message: "Token is invaild",
      });
    }

    // If token is expired
    if (userDetails.frogetPasswordExpires < Date.Now) {
      return res.status(401).json({
        success: false,
        message: "Token is expired, Please generate new one",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Update the password in DB
    await User.findOneAndUpdate(
      { token: token },
      {
        password: hashedPassword,
        confirmPassword: hashedPassword,
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });
  } 
  catch (error) {
    return res.status(500).json({
        success: false,
        messgae: "Something went wrong while forget password",
      });
  }
};
