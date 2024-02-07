import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { getPasswordResetToken } from "../services/operations/authApi";
import Sipnner from "../components/Spinner";

function ForgotPassword() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.AuthSlice);
  const [email, setEmail] = useState("");
  const [sendEmail, setSendEmail] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  // if form is successfully submitted then reset the form state
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  const forgetPasswordEmail = async (data) => {
    try {
      const { email } = data;
      setEmail(email);
      dispatch(getPasswordResetToken(email, setSendEmail));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid place-items-center">
      {loading ? (
        <Sipnner />
      ) : (
        <div className="max-w-[500px] p-4 lg:p-8">
          <h2 className="text-[1.875rem] font-semibold leading-[2.375rem]">
            {!sendEmail ? "Reset your password" : "check your email"}
          </h2>
          <p className="my-4 text-[1.125rem] leading-[1.625rem]">
            {!sendEmail
              ? "To reset your password, enter your email below and submit. An email will be sent to you with instructions about how to complete the process."
              : `We have sent the reset email to ${email}`}
          </p>
          <form onSubmit={handleSubmit(forgetPasswordEmail)}>
            {!sendEmail && (
              <div>
                <label htmlFor="email">
                  Email Address<sup className="text-rose-600">*</sup>
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
            )}
            <button
              type="submit"
              className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full my-2 transition"
            >
              {!sendEmail ? "Submit" : "Reset Email"}
            </button>
          </form>
          <div>
            <Link to="/login">
              <p className="flex items-center gap-x-2">
                <BiArrowBack />
                Back to login
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
export default ForgotPassword;
