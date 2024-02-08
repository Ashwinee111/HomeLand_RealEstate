import toast from "react-hot-toast";

import { setLoading, setToken } from "../../redux/slices/AuthSlice";
import { setUser } from "../../redux/slices/ProfileSlice";
import { apiConnector } from "../apiConnector";
import { endPoints } from "../apiLinks";

const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  RESETPASSTOKEN_API,
  RESETPASSWORD_API,
} = endPoints;

// <-- SendOtp API Call -->
export function sendotp(email, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      const response = await apiConnector("POST", SENDOTP_API, {email, checkUserPresent: true})
      console.log("SENDOTP API RESPONSE............", response);
  
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
  
      toast.success("OTP Sent Successfully");
        navigate("/verifyemail");
    } 
    catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error("Could Not Send OTP");
    }

    dispatch(setLoading(false));
    toast.dismiss(toastId)
  };
}

// <-- SignUp API Call -->
export function signup(firstName, lastName, email, password, confirmPassword, otp, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
      });

      console.log("SIGNUP API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Signup Successful");
      navigate("/login");
    } 
    catch (error) {
      console.log("SIGNUP API ERROR............", error);
      toast.error("Signup Failed");
    }

    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

// <-- Login API Call -->
export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      });
      console.log("Login API Response", response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Login Successfully");
      dispatch(setToken(response.data.token));

      const userImage = response.data?.foundUser?.image
        ? response.data.foundUser.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.foundUser.firstName} ${response.data.foundUser.lastName}`;
      dispatch(setUser({ ...response.data.foundUser}));

      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("user", JSON.stringify(response.data.foundUser));
      navigate("/");
    } catch (error) {
      console.error("Login API Error", error);
      toast.error("Login Failed");
    }

    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

// <-- LogOut API Call -->
export function logout(navigate) {
  return async (dispatch) => {
    try {
      dispatch(setToken(null));
      dispatch(setUser(null));
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast.success("Logged Out");
      navigate("/");
    } 
    catch (error) {
      console.log(error.message);
    }
  };
}

// <-- GetPasswordResetToken API Call -->
export function getPasswordResetToken(email, setEmailSent) {
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const response = await apiConnector("POST", RESETPASSTOKEN_API, {
        email,
      });
      console.log("Reset Password Token Api", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Reset Email Sent");
      setEmailSent(true);
    } catch (error) {
      console.error("Error in get password token", error);
      toast.error("User is not found");
    }

    dispatch(setLoading(false));
  };
}

// <-- ResetPassword API Call -->
export function resetPassword(password, confirmPassword, token, navigate) {
  return async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const response = await apiConnector("POST", RESETPASSWORD_API, {
        password,
        confirmPassword,
        token,
      });
      console.log("Reset Password Response", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Password is reset successfully");
      navigate("/login");
    } catch (error) {
      console.error("Error in reset the password", error);
      toast.error("Unable to reset password");
    }

    dispatch(setLoading(false));
  };
}
