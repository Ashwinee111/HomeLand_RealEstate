import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../services/operations/settingApi";

function ProfileInformation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.AuthSlice);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  async function submitInformation(data) {
    try {
      dispatch(updateProfile(token, data));
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <>
      <form onSubmit={handleSubmit(submitInformation)}>
        <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-slate-50 p-4 md:p-8 md:px-12">
          <h2 className="text-lg font-medium">Profile Information</h2>
          <div className="flex flex-col gap-5 lg:flex-row">
            {/* First Name */}
            <div className="w-full">
              <label htmlFor="firstName">First Name</label> <br />
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
            {/* Last Name */}
            <div className="w-full">
              <label htmlFor="lastName">First Name</label> <br />
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter last name"
                {...register("lastName", { required: true })}
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm mt-1"
              />
              {errors.lastName && (
                <span className="text-rose-600">Enter first name</span>
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
export default ProfileInformation;
