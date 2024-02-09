const User = require("../models/User.models");
const { uploadImageToCloudinary } = require("../utils/imageUploader.utils");


// <-- UpdateDisplayPicture Handler -->
exports.updateDisplayPicture = async (req, res) => {
  try {
    const displayPicture = req.files.displayPicture;
    const userId = req.foundUser.id;
    const image = await uploadImageToCloudinary(
      displayPicture,
      process.env.FOLDER_NAME,
      1000
    );
    console.log(image);

    const updatedProfile = await User.findByIdAndUpdate(
      { _id: userId },
      { image: image.secure_url },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Image updated successfully",
      data: updatedProfile,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while updaitng display picture.",
    });
  }
};

// <-- DeleteProfile Handler -->
exports.deleteProfile = async (req, res) => {
  try {
    const userId = req.foundUser.id;

    const userDetails = await User.findById({ _id: userId });
    if (!userDetails) {
      return res.status(400).json({
        success: false,
        message: "User not found.",
      });
    }

    await User.findByIdAndDelete({ _id: userId });

    return res.status(200).json({
      success: true,
      message: "Profile deleted successfully",
    });
  } 
  catch (error) {
    res.status(500).json({
        success: false,
        message: "Something went wrong while deleting profile"
    })
  }
};

// <-- Get All UserDetails Handler -->
// exports.getAllDetails = async(req, res) => {
//     try {
//         const userId = req.foundUser.id;
        
//         if (!userId) {
//             return res.status(400).json({
//                 success: true,
//                 message: "User Id is undefined.",
//             });
//         }

//         const userDetails = await User.findById({ _id: userId });

//         return res.status(200).json({
//             success: true,
//             message: "Data fetched successfully.",
//             data: userDetails,
//         });
//     } 
//     catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: "Something went wrong while fetching all details of user",
//         });
//     }
// }