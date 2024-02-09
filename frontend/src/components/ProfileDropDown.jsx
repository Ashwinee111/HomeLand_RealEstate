import { useSelector, useDispatch } from "react-redux";
import { IoMdArrowDropdown } from "react-icons/io";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/operations/authApi";
import { useState } from "react";

function ProfileDropDown() {
  const { user } = useSelector((state) => state.ProfileSlice);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="relative cursor-pointer" onClick={() => setOpen(!open)} >
      <div className="flex items-center">
        <div>
          <img
            src={user?.image}
            alt="profile-image"
            className="aspect-square w-[35px] rounded-full object-cover"
          />
        </div>
        <div>
          <IoMdArrowDropdown size={20} />
        </div>
      </div>
      {/* DropDown Menu  */}
      <div
        className={`${
          open ? null : "hidden"
        } absolute top-[118%] right-[-30px] z-[1000] divide-y-[1px] divide-white overflow-hidden rounded-md bg-violet-600`}
      >
        <Link to="/dashboard/myprofile">
          <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-white hover:bg-violet-700 hover:text-slate-100">
            <VscDashboard className="text-lg" />
            Dashboard
          </div>
        </Link>
        <div
          onClick={() => {
            dispatch(logout(navigate));
          }}
          className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-white hover:bg-violet-700  hover:text-slate-100 cursor-pointer"
        >
          <VscSignOut className="text-lg" />
          Logout
        </div>
      </div>
    </div>
  );
}
export default ProfileDropDown;
