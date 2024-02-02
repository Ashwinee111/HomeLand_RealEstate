import { NavLink } from "react-router-dom";
import { BiBuildingHouse } from "react-icons/bi";

function Header() {
  return (
    <header className="py-4 mb-10 border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to={"/"}>
          <div className="flex justify-center items-center">
            <BiBuildingHouse size={35} color="#7f56d9" />
            <h2 className="text-2xl font-semibold">HomeLand</h2>
          </div>
        </NavLink>
        {/* NavMenu */}
        <nav className=" flex gap-x-8">
          <NavLink to={"/"} className={({isActive})=>`${isActive ? "text-violet-900 ": ""} hover:text-violet-900 transition`}>
            Home
          </NavLink>
          <NavLink to={"/property"} className={({isActive})=>`${isActive ? "text-violet-900 ": ""} hover:text-violet-900 transition`}>
            Property
          </NavLink>
          <NavLink to={"/contact"} className={({isActive})=>`${isActive ? "text-violet-900 ": ""} hover:text-violet-900 transition`}>
            Contact Us
          </NavLink>
        </nav>
        {/* Button */}
        <div className="flex items-center gap-6 ">
          <NavLink to={"/login"} className="hover:text-violet-900 transition">
            Login
          </NavLink>
          <NavLink
            to={"/signup"}
            className="bg-violet-700 hover:bg-violet-800 text-white px-3 py-2 rounded-lg transition"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </header>
  );
}
export default Header;
