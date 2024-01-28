const express = require('express');
const router = express.Router()

const {sendOtp, signup, login, changePassword} = require("../controllers/Auth.controllers")


// Sending Otp to User's email
router.post('/sendotp', sendOtp)
// User SignUp
router.post('/signup', signup)
// User Login
router.post('/login', login)
//  Change Password
router.post("/changepassword", changePassword);

module.exports = router