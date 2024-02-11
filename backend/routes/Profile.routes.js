const express = require('express');
const router = express.Router()

const {updateDisplayPicture, deleteProfile, updateProfile} = require("../controllers/Profile.controllers")
const {auth} = require("../middlewares/Auth.middleware")

// **************************************************************
//                      Profile's Routes
// **************************************************************

// Update DisplayPicture
router.put("/updateDisplayPicture", auth, updateDisplayPicture)
// Delete Account
router.delete("/deleteProfile", auth, deleteProfile)
// Update Profile
router.put("/updateProfile", auth, updateProfile)

module.exports = router