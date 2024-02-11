import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { settingsEndpoints } from "../apiLinks";
import { logout } from "./authApi";
import { setUser } from "../../redux/slices/ProfileSlice";

const {
  CHANGE_PASSWORD_API,
  DELETE_PROFILE_API,
  UPDATE_DISPLAY_PICTURE_API,
  UPDATE_PROFILE_API,
} = settingsEndpoints;

// <-- Profile Delete API Call -->
export function deleteProfile(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");

    try {
      const response = await apiConnector("DELETE", DELETE_PROFILE_API, null, {
        Authorization: `Bearer ${token}`,
      });

      console.log("DELETE_PROFILE_API API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Profile Deleted Successfully");
      dispatch(logout(navigate));
    } catch (error) {
      console.log("DELETE_PROFILE_API API ERROR............", error);
      toast.error("Could Not Delete Profile");
    }

    toast.dismiss(toastId);
  };
}

// <-- Change Password API Call -->
export function changePassword(token, formData) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");

    try {
      const response = await apiConnector(
        "POST",
        CHANGE_PASSWORD_API,
        formData,
        { Authorization: `Bearer ${token}` }
      );

      console.log("Change Password Successfully", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Password Changed Successfully");
    } catch (error) {
      console.log("Password not change", error);
      toast.error(error.response.data.message);
    }

    toast.dismiss(toastId);
  };
}

// <-- UpdateDisplayPicture API Call -->
export function updateDisplayPicture(token, formData) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");

    try {
      const response = await apiConnector(
        "PUT",
        UPDATE_DISPLAY_PICTURE_API,
        formData,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      );

      console.log(
        "UPDATE_DISPLAY_PICTURE_API API RESPONSE............",
        response
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Display Picture Updated Successfully");
      dispatch(setUser(response.data.data));
    } catch (error) {
      console.log("UPDATE_DISPLAY_PICTURE_API API ERROR............", error);
      toast.error("Could Not Update Display Picture");
    }

    toast.dismiss(toastId);
  };
}

// <-- UpdateProfile API Call -->
export function updateProfile(token, formData) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");

    try {
      const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData, {
        Authorization: `Bearer ${token}`,
      });

      console.log("UPDATE_PROFILE_API API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      const userImage = response.data.updateUser.image
        ? response.data.updateUser.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.updateUser.firstName} ${response.data.updateUser.lastName}`;

      dispatch(
        setUser({ ...response.data.updateUser, image: userImage })
      );
      
      toast.success("Profile Updated Successfully");
    } 
    catch (error) {
      console.log("UPDATE_PROFILE_API API ERROR............", error);
      toast.error("Could Not Update Profile");
    }

    toast.dismiss(toastId);
  };
}
