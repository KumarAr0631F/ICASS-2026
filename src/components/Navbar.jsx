import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu and prevent page scroll
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.classList.toggle("overflow-hidden", !isMenuOpen);
  };

  // Scroll to top when a menu item is clicked
  const handleMenuItemClick = (path) => {
    toggleMenu(); // Close the menu
    window.scrollTo(0, 0); // Scroll to the top
    navigate(path); // Navigate to the route
  };

  return (
    <nav className="bg-slate-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Left Section - Logos */}
        <div className="flex items-center space-x-4">
          <img
            onClick={() => navigate("/")}
            src={assets.icass2026}
            alt="Logo"
            className="h-16 w-auto cursor-pointer"
          />
          <img
            src={assets.mru_logo}
            alt="Logo 2"
            className="h-16 w-auto hidden sm:block"
          />
          <img
            src={assets.mru_soe}
            alt="Logo 3"
            className="h-16 w-auto hidden md:block"
          />
          <img
            src={assets.mru}
            alt="Logo 4"
            className="h-16 w-auto hidden lg:block"
          />
        </div>

        {/* Right Section - Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink
            to="/"
            className="hover:cursor-pointer transition duration-200"
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:cursor-pointer transition duration-200"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/guidelines"
            className="hover:cursor-pointer transition duration-200"
          >
            Guidelines
          </NavLink>
          <NavLink
            to="/registration"
            className="hover:cursor-pointer transition duration-200"
          >
            Registration
          </NavLink>
          <NavLink
            to="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICCSAI2025"
            className="bg-red-500 py-2 px-3 text-white rounded-lg transition duration-200 hover:bg-red-600"
          >
            Submit Your Paper
          </NavLink>
        </div>

        {/* Hamburger Menu - Mobile View */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      <div
        className={`fixed top-16 left-0 w-full bg-slate-100 shadow-lg transition-all duration-300 z-40 ${
          isMenuOpen ? "h-1/2" : "h-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col items-center space-y-4 py-8 px-4">
          <li>
            <button
              onClick={() => handleMenuItemClick("/")}
              className="text-lg hover:text-yellow-300 transition duration-200"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleMenuItemClick("/contact")}
              className="text-lg hover:text-yellow-300 transition duration-200"
            >
              Contact Us
            </button>
          </li>
          <li>
            <button
              onClick={() => handleMenuItemClick("/guidelines")}
              className="text-lg hover:text-yellow-300 transition duration-200"
            >
              Guidelines
            </button>
          </li>
          <li>
            <button
              onClick={() => handleMenuItemClick("/registration")}
              className="text-lg hover:text-yellow-300 transition duration-200"
            >
              Registration
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                window.open(
                  "https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICCSAI2025",
                  "_blank"
                )
              }
              className="bg-red-500 py-2 px-6 w-full text-center text-white rounded-lg transition duration-200 hover:bg-red-600"
            >
              Submit Your Paper
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
