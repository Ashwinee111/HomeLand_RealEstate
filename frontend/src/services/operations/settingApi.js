import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { settingsEndpoints } from "../apiLinks";
import { logout } from "./authApi";

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
    } 
    catch (error) {
        console.log("DELETE_PROFILE_API API ERROR............", error);
        toast.error("Could Not Delete Profile");
    }

    toast.dismiss(toastId);
    };
}
