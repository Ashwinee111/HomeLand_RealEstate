const express = require('express');
const router = express.Router()

const {sendOtp, signup} = require("../controllers/Auth.controllers")

router.post('/sendotp', sendOtp)
router.post('/signup', signup)

module.exports = router