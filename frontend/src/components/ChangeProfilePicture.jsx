import { useDispatch, useSelector } from "react-redux";
import { PiUploadSimpleBold } from "react-icons/pi";

function ChangeProfilePicture() {
  const { user } = useSelector((state) => state.ProfileSlice);
  return (
    <div className="flex flex-col md:flex-row gap-y-3 items-center gap-x-5 rounded-md border p-8 px-12 w-[100%] bg-slate-50">
      <div>
        <img
          src={user.image}
          alt=""
          className="aspect-square w-[100px] rounded-full object-cover"
        />
      </div>
      <div>
        <h2 className="text-base md:text-lg mb-1">Change Profile Picture</h2>
        <div className="flex gap-2">
          <button className="bg-green-500 hover:bg-green-600 text-white rounded  text-sm w-full transition px-[15px] py-[10px]">
            Select
          </button>
          <button className="bg-violet-700 hover:bg-violet-800 text-white rounded text-sm w-full transition flex items-center justify-center gap-x-2 px-[15px] py-[10px]">
            Upload <PiUploadSimpleBold />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ChangeProfilePicture;
