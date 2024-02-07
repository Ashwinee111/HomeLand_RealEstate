const BASE_URL = import.meta.env.VITE_API_URL;

// AUTH ENDPOINT
export const endPoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSWORD_API: BASE_URL + "/auth/forgetpassword",
  RESETPASSTOKEN_API: BASE_URL + "/auth/forgetpasswordtoken",
};