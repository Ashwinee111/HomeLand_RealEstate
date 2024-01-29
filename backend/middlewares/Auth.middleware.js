const jwt = require("jsonwebtoken");

// Auth
exports.auth = async (req, res, next) => {
  try {
    // Extract token
    const token =
      req.body.token ||
      req.cookies.token ||
      req.header("Authorization").replace("Bearer ", "");
    // If token is missing
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token is missing.",
      });
    }
    // Verify token
    try {
      const decode = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
      req.foundUser = decode;
    } 
    catch (error) {
      console.error(error);
      res.status(401).json({
        success: false,
        message: "Token is invalid",
      });
    }
    next();
  } 
  catch (error) {
    console.error(error);
    res.status(401).json({
      success: false,
      message: "Something went wrong while validating the token",
    });
  }
};
