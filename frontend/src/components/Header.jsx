import { NavLink } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

function Header() {
  return (
    <header className="py-4 mb-10 border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to={"/"}>
          <img src={Logo} alt="logo.svg" className="w-[50px] h-[50px]" />
        </NavLink>
        {/* NavMenu */}
        <nav></nav>
        {/* Button */}
        <div className="flex items-center gap-6 ">
          <NavLink to={"/login"} className="hover:text-violet-900 transition">Login</NavLink>
          <NavLink to={"/signup"} className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition">Sign Up</NavLink>
        </div>
      </div>
    </header>
  );
}
export default Header;
