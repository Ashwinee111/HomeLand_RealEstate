const express = require('express');
const router = express.Router()

const {updateDisplayPicture, deleteProfile, getAllDetails} = require("../controllers/Profile.controllers")
const {auth} = require("../middlewares/Auth.middleware")

// **************************************************************
//                      Profile's Routes
// **************************************************************

// Update DisplayPicture
router.put("/updateDisplayPicture", auth, updateDisplayPicture)
// Delete Account
router.delete("/deleteProfile", auth, deleteProfile)
// Get All Details
// router.get("/getAllDetails", auth, getAllDetails)

module.exports = router