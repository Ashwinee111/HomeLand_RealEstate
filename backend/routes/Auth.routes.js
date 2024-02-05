const express = require('express');
const router = express.Router()

const {sendOtp, signup, login, changePassword} = require("../controllers/Auth.controllers")
const {forgetPasswordToken, forgetPassword} = require("../controllers/ForgetPassword.controllers")
const {auth} = require("../middlewares/Auth.middleware")


// **************************************************************
//                  Authentication routers
// **************************************************************

// Sending Otp to User's email
router.post('/sendotp', sendOtp)
// User SignUp
router.post('/signup', signup)
// User Login
router.post('/login', login)
//  Change Password
router.post("/changepassword", auth, changePassword);


// **************************************************************
//                  Forget Password
// **************************************************************

// Genrating token for forget password
router.post("/forgetpasswordtoken", forgetPasswordToken)
// Password forget after verification
router.post("/forgetpassword", forgetPassword)


module.exports = router