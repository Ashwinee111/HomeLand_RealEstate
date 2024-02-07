import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import {useDispatch} from "react-redux"
import { setSignupData } from "../redux/slices/AuthSlice";
import { sendotp } from "../services/operations/authApi";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    try {
        if (data.password !== data.confirmPassword) {
          toast.error("Passwords not match");
          return;
        }

        const signUpData = {
          ...data,
        };
        
      dispatch(setSignupData(signUpData))
      dispatch(sendotp(signUpData.email , navigate))
    } 
    catch (error) {
      console.error(error);
    }
  };

  // if form is successfully submitted then reset the form state
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center pb-[3rem]">
        <h2 className="text-[1.3rem] font-medium mb-8">Signup</h2>
        {/* SignUp Form */}
        <div className="lg:w-[50%]">
          <form
            onSubmit={handleSubmit(submitContactForm)}
            className="flex flex-col gap-y-4"
          >
            {/* first and last name */}
            <div className="flex justify-between gap-x-3">
              <div className="w-full">
                <label htmlFor="firstName">
                  First Name <sup className="text-rose-600">*</sup>
                </label>
                <br />
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter first name"
                  {...register("firstName", { required: true })}
                  className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm mt-1"
                />
                {errors.firstName && (
                  <span className="text-rose-600">Enter first name</span>
                )}
              </div>
              <div className="w-full">
                <label htmlFor="lastName">
                  Last Name <sup className="text-rose-600">*</sup>
                </label>
                <br />
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter last name"
                  {...register("lastName", { required: true })}
                  className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm mt-1"
                />
                {errors.lastName && (
                  <span className="text-rose-600">Enter last name</span>
                )}
              </div>
            </div>
            {/* email */}
            <div>
              <label htmlFor="email">
                Email <sup className="text-rose-600">*</sup>
              </label>{" "}
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email address"
                {...register("email", { required: true })}
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm mt-1"
              />
              {errors.email && (
                <span className="text-rose-600">Enter email address</span>
              )}
            </div>
            {/* password and confirmpassword */}
            <div className="flex flex-col gap-y-3 justify-between md:flex-row gap-x-3">
              <div className="w-full relative">
                <label htmlFor="password">
                  Create Password <sup className="text-rose-600">*</sup>
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
                  <span className="text-rose-600">Please enter password</span>
                )}
              </div>
              <div className="w-full relative">
                <label htmlFor="confirmPassword">
                  ConfirmPassword <sup className="text-rose-600">*</sup>
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
                  <span className="text-rose-600">
                    Please enter confirm password
                  </span>
                )}
              </div>
            </div>
            {/* button */}
            <div>
              <button
                type="submit"
                className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
