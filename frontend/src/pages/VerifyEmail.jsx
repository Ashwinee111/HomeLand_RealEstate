import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { signup } from "../services/operations/authApi";

function VerifyEmail() {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signupData, loading } = useSelector((state) => state.AuthSlice);

  useEffect(() => {
    if (!signupData) {
      navigate("/signup");
    }
  }, []);

  function handleVerifyAndSignup(event) {
    event.preventDefault();
    const {firstName, lastName, email, password, confirmPassword} = signupData;
    dispatch(signup(firstName, lastName, email, password, confirmPassword, otp, navigate));
  }

  return (
    <div className="grid place-items-center">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="max-w-[500px] p-4 lg:p-8">
          <h2 className="font-semibold text-[1.875rem] leading-[2.375rem]">
            Verify Email
          </h2>
          <p className="text-[1.125rem] leading-[1.625rem] my-4">
            A verification code has been sent to you. Enter the code below
          </p>
          <form onSubmit={handleVerifyAndSignup}>
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => (
                <input
                  {...props}
                  placeholder="-"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-[48px] lg:w-[60px] rounded-[0.5rem] aspect-square text-center border border-gray-500 focus:border-0 focus:outline-2 focus:outline-violet-700"
                />
              )}
              containerStyle={{
                justifyContent: "space-between",
                gap: "0 6px",
              }}
            />
            <button
              type="submit"
              className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition mt-4"
            >
              Verify Email
            </button>
          </form>
          <div className="mt-6 flex items-center justify-between">
            <Link to="/signup">
              <p className="text-richblack-5 flex items-center gap-x-2">
                <BiArrowBack /> Back To Signup
              </p>
            </Link>
            <button
              className="flex items-center text-[#016bf8] gap-x-2"
              onClick={() => dispatch(sendOtp(signupData.email, navigate))}
            >
              <RxCountdownTimer />
              Resend it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default VerifyEmail;
