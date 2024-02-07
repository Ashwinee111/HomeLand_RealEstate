import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../services/operations/authApi";
import {AiOutlineEyeInvisible, AiOutlineEye} from "react-icons/ai"

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    // ============ * NOT RECOMMENDATION * ============
    // const res = await fetch("/api/v1/auth/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });
    // ================================================
    const { email, password } = data;
    try {
      dispatch(login(email, password, navigate));
    } catch (error) {
      console.error(error);
    }
  };

  // If form is successfully submitted then reset the form state
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        password: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center pb-[3rem]">
        <h2 className="text-[1.3rem] font-medium mb-8">Login</h2>
        {/* SignUp Form */}
        <div className="lg:w-[50%]">
          <form
            onSubmit={handleSubmit(submitContactForm)}
            className="flex flex-col gap-y-4"
          >
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
            {/* password */}
            <div className="flex flex-col gap-y-3 justify-between md:flex-row gap-x-3">
              <div className="w-full relative">
                <label htmlFor="password">
                  Password <sup className="text-rose-600">*</sup>
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
            </div>
            {/* forgotpassword */}
            <Link
              to={"/forgotpassword"}
              className="text-right text-sm text-[#016bf8]"
            >
              Forgot Password?
            </Link>
            {/* button */}
            <div>
              <button
                type="submit"
                className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
