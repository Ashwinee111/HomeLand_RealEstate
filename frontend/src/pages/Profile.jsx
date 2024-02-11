import { useDispatch, useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.ProfileSlice);
  const { firstName, lastName, email, image, createdAt } = user;

  return (
    <div className="container mx-auto flex flex-col items-center justify-center py-16 mb-10">
      <div>
        <h2 className="mb-8 text-3xl font-medium">My Profile</h2>
      </div>
      <div className="w-[500px] p-8 flex flex-col items-center gap-y-5 border rounded-xl bg-slate-50">
        <div className="border rounded-full p-1 mb-5">
          <img
            src={image}
            alt="profile-image"
            className="aspect-square w-[100px] rounded-full object-cover"
          />
        </div>
        <div className="w-[100%] flex flex-col gap-y-4 md:flex-row justify-between items-start">
          <div className="w-[45%]">
            <p className="text-base font-medium text-violet-700">Email</p>
            <h3 className="text-sm font-medium">{email}</h3>
          </div>
          <div className="md:w-[45%]">
            <p className="text-base font-medium text-violet-700">
              Account Created
            </p>
            <h3 className="text-sm font-medium">{createdAt.split("T")[0]}</h3>
          </div>
        </div>
        <div className="w-[100%] flex justify-between items-start">
          <div className="w-[45%]">
            <p className="text-base font-medium text-violet-700">First Name</p>
            <h3 className="text-sm font-medium">{firstName}</h3>
          </div>
          <div className="w-[45%]">
            <p className="text-base font-medium text-violet-700">Last Name</p>
            <h3 className="text-sm font-medium">{lastName}</h3>
          </div>
        </div>
        <Link
          to={"/dashboard/settings"}
          className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition flex items-center justify-center gap-x-2"
        >
          Edit Profile
          <FiEdit />
        </Link>
      </div>
    </div>
  );
}
export default Profile;
