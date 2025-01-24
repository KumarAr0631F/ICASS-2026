import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVenueDropdownOpen, setIsVenueDropdownOpen] = useState(false);

  // Toggle menu and prevent page scroll
  const toggleMenu = () => {
    if (isMenuOpen) {
      // Close menu and reset dropdown
      setIsVenueDropdownOpen(false);
      setIsMenuOpen(false);
      document.body.style.overflow = "auto";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
    }
  };

  // Toggle the venue dropdown
  const toggleVenueDropdown = () => {
    setIsVenueDropdownOpen((prev) => !prev);
  };

  // Scroll to top and navigate to the desired path
  const handleMenuItemClick = (path) => {
    toggleMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  return (
    <nav className="bg-slate-100 sticky top-0 z-50">
      {/* Logos and Submit Your Paper button in a single line (only on desktop) */}
      <div className="bg-gray-100 py-3 px-4 hidden md:flex justify-between items-center">
        {/* Logos */}
        <div className="flex flex-1 space-x-6 justify-start">
          <img
            src={assets.icass2026} // Replace with your logo source
            alt="Logo 1"
            className="h-10 w-auto"
          />
          <img
            src={assets.mru_logo} // Replace with your logo source
            alt="Logo 2"
            className="h-10 w-auto"
          />
          <img
            src={assets.mru_soe} // Replace with your logo source
            alt="Logo 3"
            className="h-10 w-auto"
          />
          <img
            src={assets.mru} // Replace with your logo source
            alt="Logo 4"
            className="h-10 w-auto"
          />
        </div>

        {/* Submit Your Paper Button */}
        <div className="ml-6">
          <Link
            to="https://cmt3.research.microsoft.com/User/Login"
            target="_blank"
            className="bg-red-500 py-2 px-6 text-center text-white rounded-lg transition duration-200 hover:bg-red-600"
          >
            Submit Your Paper
          </Link>
        </div>
      </div>

      {/* Main Navbar for Mobile */}
      <div className="container mx-auto flex items-center justify-between px-4 py-2 md:hidden">
        {/* Logo on the left */}
        <div>
          <img
            onClick={() => navigate("/")}
            src={assets.icass2026}
            alt="ICASS 2026 Logo"
            className="h-12 w-auto cursor-pointer"
          />
        </div>

        {/* Menu icon on the right */}
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

      {/* Dropdown Menu for Mobile */}
      <div
        className={`fixed top-[4rem] right-0 h-[calc(100vh-4rem)] w-64 bg-slate-100 shadow-lg z-40 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ overflowY: "auto" }}
      >
        <ul className="flex flex-col space-y-4 py-8 px-4">
          {[{ label: "Home", path: "/" }, { label: "Organising Committees", path: "/committee" }, { label: "Conference Schedule", path: "/schedule" }, { label: "Author's Guidelines", path: "/guidelines" }, { label: "Registration", path: "/registration" }, { label: "Contact Us", path: "/contact" }].map((item) => (
            <li key={item.label}>
              <button onClick={() => handleMenuItemClick(item.path)} className="text-lg">
                {item.label}
              </button>
            </li>
          ))}
          
          <li>
            {/* Venue Dropdown */}
            <button onClick={toggleVenueDropdown} className="text-lg flex items-center justify-between w-full">
              Venue & Travels
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${isVenueDropdownOpen ? "rotate-180" : "rotate-0"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isVenueDropdownOpen && (
              <ul className="pl-4 mt-2 space-y-2">
                {[{ label: "Conference Venue", path: "/venue" }, { label: "Accommodation", path: "/accommodation" }, { label: "Tourist Places Nearby", path: "/tourist-places" }].map((item) => (
                  <li key={item.label}>
                    <button onClick={() => handleMenuItemClick(item.path)} className="text-base">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
          
          <li>
            <Link
              to="https://cmt3.research.microsoft.com/User/Login"
              target="_blank"
              className="bg-red-500 py-2 px-6 w-full text-center text-white rounded-lg transition duration-200 hover:bg-red-600"
            >
              Submit Your Paper
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
