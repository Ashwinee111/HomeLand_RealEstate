const BASE_URL = import.meta.env.VITE_API_URL;

// AUTH ENDPOINT
export const endPoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSWORD_API: BASE_URL + "/auth/forgetpassword",
  RESETPASSTOKEN_API: BASE_URL + "/auth/forgetpasswordtoken",
};


// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
};