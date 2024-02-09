import { NavLink } from "react-router-dom";
import { BiBuildingHouse } from "react-icons/bi";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { useSelector} from "react-redux";
import ProfileDropDown from "./ProfileDropDown";

function Header() {
  const [open, setOpen] = useState(false);
  const { token } = useSelector((state) => state.AuthSlice);

  return (
    <header className="py-4 mb-10 border-b">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* NavLogo */}
        <NavLink to={"/"}>
          <div className="flex justify-center items-center">
            <BiBuildingHouse size={35} color="#7f56d9" />
            <h2 className="text-2xl font-semibold">HomeLand</h2>
          </div>
        </NavLink>
        <div
          className={`md:flex md:items-center md:justify-between md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[2]  left-0 w-full md:w-[60%]  md:pl-0 pl-[16px]  transition-all duration-500 ease-in ${
            open ? "top-14" : "hidden"
          }`}
        >
          {/* NavMenu */}
          <nav className=" flex flex-col gap-y-2  md:gap-x-8  md:flex-row">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-violet-900 " : ""
                } hover:text-violet-900 transition`
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/property"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-violet-900 " : ""
                } hover:text-violet-900 transition`
              }
            >
              Property
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-violet-900 " : ""
                } hover:text-violet-900 transition`
              }
            >
              Contact Us
            </NavLink>
          </nav>
          {/* NavButton */}
          <div>
            {token === null && (
              <div className="flex flex-col items-start gap-y-3 md:items-center md:flex-row md:gap-x-6">
                <NavLink
                  to={"/login"}
                  className="hover:text-violet-900 transition pt-2 md:pt-0"
                >
                  Login
                </NavLink>
                <NavLink
                  to={"/signup"}
                  className="bg-violet-700 hover:bg-violet-800 text-white px-3 py-2 rounded-lg transition"
                >
                  Sign Up
                </NavLink>
              </div>
            )}
          </div>
        </div>
        {/* Profile image */}
        <div className={token === null ? "hidden" : ""}>
          {token !== null && <ProfileDropDown />}
        </div>
        {/* Mobile menu icon */}
        <div onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <RiCloseLine size={28} /> : <RiMenu3Line size={25} />}
        </div>
      </div>
    </header>
  );
}
export default Header;
