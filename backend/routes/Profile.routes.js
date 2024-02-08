const express = require('express');
const router = express.Router()

const {updateDisplayPicture} = require("../controllers/Profile.controllers")
const {auth} = require("../middlewares/Auth.middleware")

// **************************************************************
//                      Profile's Routes
// **************************************************************

// updateDisplayPicture
router.put("/updateDisplayPicture", auth, updateDisplayPicture)
// Delete Account
// router.delete("/deleteProfile", auth, deleteProfile)

module.exports = router