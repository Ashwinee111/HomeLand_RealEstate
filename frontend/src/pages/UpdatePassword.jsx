import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import Spinner from "../components/Spinner";
import toast from "react-hot-toast";
import { resetPassword } from "../services/operations/authApi";

function UpdatePassword() {
  const { loading } = useSelector((state) => state.AuthSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        password: "",
        confirmPassword: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  const submitNewPassword = async (data) => {
    try {
      const { password, confirmPassword } = data;
      if (password !== confirmPassword) {
        return toast.error("Passwords do not match");
      }
      const token = location.pathname.split("/").at(-1);
      dispatch(resetPassword(password, confirmPassword, token, navigate));
    } 
    catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="grid place-items-center">
      {loading ? (
        <Spinner />
      ) : (
        <div className="max-w-[500px] p-4 lg:p-8">
          <h2 className="text-[1.875rem] font-semibold leading-[2.375rem]">
            Choose new password
          </h2>
          <p className="my-4 text-[1.125rem] leading-[1.625rem]">
            Almost done. Enter your new password and youre all set.
          </p>
          <form onSubmit={handleSubmit(submitNewPassword)} className="flex flex-col gap-y-3">
            {/* New Password */}
            <div className="relative">
              <label htmlFor="password">
                New Password <sup className="text-rose-600">*</sup>
              </label>{" "}
              <br />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter password"
                {...register("password", { required: true })}
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm mt-1"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[50%] z-[10] cursor-pointer"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
              {errors.password && (
                <span className="text-rose-600">Enter password</span>
              )}
            </div>
            {/* Confirm Password */}
            <div className="relative">
              <label htmlFor="confirmPassword">
                Confirm Password <sup className="text-rose-600">*</sup>
              </label>{" "}
              <br />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Enter confirm password"
                {...register("confirmPassword", { required: true })}
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm mt-1"
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-[50%] z-[10] cursor-pointer"
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
              {errors.confirmPassword && (
                <span className="text-rose-600">Enter confirm password</span>
              )}
            </div>
            {/* Button */}
            <button
              type="submit"
              className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition"
            >
              Reset Password
            </button>
          </form>
          <div className="mt-6 flex items-center justify-between">
            <Link to="/login">
              <p className="flex items-center gap-x-2">
                <BiArrowBack /> Back To Login
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
export default UpdatePassword;
