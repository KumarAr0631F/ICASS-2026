import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <nav className="bg-slate-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Left Section - Logo/Images */}
        <div className="flex items-center space-x-4">
          <img src={assets.icass2025} alt="Logo 1" className="h-10 w-auto" />
          <img src={assets.mru_logo} alt="Logo 2" className="h-10 w-auto" />
          <img src={assets.mru_soe} alt="Logo 3" className="h-10 w-auto" />
          <img src={assets.mru} alt="Logo 3" className="h-10 w-auto" />
        </div>

        {/* Right Section - Navigation Links */}
        <div className="flex space-x-6 justify-center items-center">
          <NavLink to="/" activeClassName="text-yellow-300">
            Home
          </NavLink>
          <NavLink to="/contact" activeClassName="text-yellow-300">
            Contact Us
          </NavLink>
          <NavLink to="/guidelines" activeClassName="text-yellow-300">
            Guidelines
          </NavLink>
          <NavLink to="/registration" activeClassName="text-yellow-300">
            Registration
          </NavLink>
          <button
            className=" bg-red-500 py-2.5 px-3 text-white rounded-lg cursor-pointer "
            activeClassName="text-yellow-300"
          >
            Submit Your Paper
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
