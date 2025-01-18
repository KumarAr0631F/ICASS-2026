import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVenueDropdownOpen, setIsVenueDropdownOpen] = useState(false);

  // Toggle menu and prevent page scroll
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden"; // Prevent scrolling when menu is open
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
    <nav className="bg-slate-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2">
        {/* Left Section - Logos */}
        <div className="flex items-center space-x-4">
          <img
            onClick={() => navigate("/")}
            src={assets.icass2026}
            alt="ICASS 2026 Logo"
            className="h-16 w-auto cursor-pointer"
          />
          <img
            src={assets.mru_logo}
            alt="MRU Logo"
            className="h-16 w-auto hidden sm:block"
          />
          <img
            src={assets.mru_soe}
            alt="MRU SOE Logo"
            className="h-16 w-auto hidden md:block"
          />
          <img
            src={assets.mru}
            alt="MRU Full Logo"
            className="h-16 w-auto hidden lg:block"
          />
        </div>

        {/* Submit Your Paper Button */}
        <div className="hidden md:block">
          <a
            href="https://cmt3.research.microsoft.com/User/Login"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 py-2 px-3 text-white rounded-lg transition duration-200 hover:bg-red-600"
          >
            Submit Your Paper
          </a>
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
        className={`fixed top-[5rem] right-0 h-[calc(100vh-4rem)] w-64 bg-slate-100 shadow-lg z-40 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ overflowY: "auto" }}
      >
        <ul className="flex flex-col items-center justify-center space-y-4 py-8 px-4">
          {[
            { label: "Home", path: "/" },
            { label: "Committees", path: "/committee" },
            { label: "Conference Schedule", path: "/schedule" },
            { label: "Author's Guidelines", path: "/guidelines" },
            { label: "Registration", path: "/registration" },
            { label: "Contact Us", path: "/contact" },
          ].map((item) => (
            <li key={item.label}>
              <button
                onClick={() => handleMenuItemClick(item.path)}
                className="text-lg"
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            {/* Venue Dropdown */}
            <button
              onClick={toggleVenueDropdown}
              className="text-lg flex items-center justify-center w-full"
            >
              Venue & Travels
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  isVenueDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isVenueDropdownOpen && (
              <ul className="pl-4 mt-2 space-y-2">
                {[
                  { label: "Conference Venue", path: "/travel-guide" },
                  { label: "Accommodation", path: "/accommodations" },
                  { label: "Tourist Places Nearby", path: "/venue-details" },
                ].map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => handleMenuItemClick(item.path)}
                      className="text-base"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() =>
                window.open(
                  "https://cmt3.research.microsoft.com/User/Login",
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
