const express = require('express');
const router = express.Router()

const {user} = require("../controllers/User.controllers")

router.post('/user', user)

module.exports = router