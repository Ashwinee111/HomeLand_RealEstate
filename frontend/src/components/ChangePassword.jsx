import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../services/operations/settingApi";

function ChangePassword() {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.AuthSlice);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  const submitPasswordForm = async (data) => {
    try {
      dispatch(changePassword(token, data));
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitPasswordForm)}>
        <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-slate-50 p-4 md:p-8 md:px-12">
          <h2 className="text-lg font-medium">Password</h2>
          <div className="flex flex-col gap-5 lg:flex-row">
            {/* Current Password */}
            <div className="relative lg:w-[48%]">
              <label htmlFor="oldPassword">
                Current Password <sup className="text-rose-600">*</sup>
              </label>{" "}
              <br />
              <input
                type={showOldPassword ? "text" : "password"}
                name="oldPassword"
                id="oldPassword"
                placeholder="Enter Current Password"
                {...register("oldPassword", { required: true })}
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm mt-1"
              />
              <span
                onClick={() => setShowOldPassword((prev) => !prev)}
                className="absolute right-3 top-[50%] z-[10] cursor-pointer"
              >
                {showOldPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
              {errors.oldPassword && (
                <span className="text-rose-600">
                  Please enter your Current Password.
                </span>
              )}
            </div>
            {/* New Password */}
            <div className="relative lg:w-[48%]">
              <label htmlFor="newPassword">
                New Password <sup className="text-rose-600">*</sup>
              </label>{" "}
              <br />
              <input
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                id="newPassword"
                placeholder="Enter New Password"
                {...register("newPassword", { required: true })}
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm mt-1"
              />
              <span
                onClick={() => setShowNewPassword((prev) => !prev)}
                className="absolute right-3 top-[50%] z-[10] cursor-pointer"
              >
                {showNewPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
              {errors.newPassword && (
                <span className="text-rose-600">
                  Please enter your New Password.
                </span>
              )}
            </div>
            {/* Confirm Password */}
            <div className="relative lg:w-[48%]">
              <label htmlFor="confirmNewPassword">
                Confirm Password <sup className="text-rose-600">*</sup>
              </label>{" "}
              <br />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmNewPassword"
                id="confirmNewPassword"
                placeholder="Enter Confirm Password"
                {...register("confirmNewPassword", { required: true })}
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm mt-1"
              />
              <span
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-[50%] z-[10] cursor-pointer"
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
              {errors.confirmNewPassword && (
                <span className="text-rose-600">
                  Please enter your Confirm Password.
                </span>
              )}
            </div>
          </div>
          {/* Button */}
          <div className="flex flex-col md:flex-row gap-2 w-[100px]">
            <button
              onClick={() => navigate("/dashboard/myprofile")}
              className="bg-green-500 hover:bg-green-600 text-white rounded  text-sm w-full transition px-[15px] py-[10px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-violet-700 hover:bg-violet-800 text-white rounded text-sm w-full transition flex items-center justify-center gap-x-2 px-[15px] py-[10px]"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ChangePassword;
