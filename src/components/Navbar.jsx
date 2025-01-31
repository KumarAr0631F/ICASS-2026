import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVenueDropdownOpen, setIsVenueDropdownOpen] = useState(false);
  const [isCommitteesDropdownOpen, setIsCommitteesDropdownOpen] =
    useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsVenueDropdownOpen(false);
      setIsCommitteesDropdownOpen(false);
      setIsMenuOpen(false);
      document.body.style.overflow = "auto";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const toggleVenueDropdown = () => {
    setIsVenueDropdownOpen((prev) => !prev);
  };

  const toggleCommitteesDropdown = () => {
    setIsCommitteesDropdownOpen((prev) => !prev);
  };

  const handleMenuItemClick = (path) => {
    toggleMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  return (
    <nav className="bg-slate-100 sticky top-0 z-50">
      <div className="bg-gray-100 ml-5 mr-5 hidden md:flex justify-between items-center">
        <div className="flex flex-1 space-x-6 justify-start items-center">
          <NavLink to={"/"}>
            <img
              src={assets.icass2026}
              alt="Logo 1"
              className="h-[64px] w-[160px]"
            />
          </NavLink>
          <img src={assets.mru_logo} alt="Logo 2" className="h-10 w-auto" />
          <img src={assets.mru_soe} alt="Logo 3" className="h-10 w-auto" />
          <img src={assets.mru} alt="Logo 4" className="h-10 w-auto" />
        </div>

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

      <div className="container mx-auto flex items-center justify-between px-4 py-2 md:hidden">
        <div>
          <img
            onClick={() => navigate("/")}
            src={assets.icass2026}
            alt="ICASS 2026 Logo"
            className="h-12 w-auto cursor-pointer"
          />
        </div>
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

      <div
        className={`fixed top-[4rem] right-0 h-[calc(100vh-4rem)] w-64 bg-slate-100 shadow-lg z-40 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ overflowY: "auto" }}
      >
        <ul className="flex flex-col space-y-4 py-8 px-4">
          <li>
            <button
              onClick={() => handleMenuItemClick("/")}
              className="text-lg"
            >
              Home
            </button>
          </li>

          <li>
            <button
              onClick={toggleCommitteesDropdown}
              className="text-lg flex w-full"
            >
              Committees
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  isCommitteesDropdownOpen ? "rotate-180" : "rotate-0"
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
            {isCommitteesDropdownOpen && (
              <ul className="ml-5 mt-2 grid items-start space-y-2">
                {[
                  { label: "patrons & chairs", path: "/patrons" },
                  {
                    label: "Organising Committees",
                    path: "/organising-committee",
                  },
                  { label: "Advisory Committee", path: "/advisory-committee" },
                  {
                    label: "Techinal Committee",
                    path: "/technical-committee",
                  }, // Added extraClass
                ].map((item) => (
                  <li key={item.label} className={item.extraClass || ""}>
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

          {[
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
            <button
              onClick={toggleVenueDropdown}
              className="text-lg flex items-center w-full"
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
                  { label: "Conference Venue", path: "/venue" },
                  { label: "Accommodation", path: "/accommodation" },
                  { label: "Tourist Places Nearby", path: "/tourist-places" },
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
          <div>
            <Link
              to="https://cmt3.research.microsoft.com/User/Login"
              target="_blank"
              className="bg-red-500 py-1 px-6 text-center text-white rounded-lg transition duration-200 hover:bg-red-600"
            >
              Submit Your Paper
            </Link>
          </div>
        </ul>
      </div>
      <div className="text-white bg-blue-500 hidden md:flex items-center justify-around sticky top-[64px] z-50 w-full">
        {/* Navbar Container */}
        <div className="flex items-center justify-between">
          {/* Navigation Links */}
          <div className="flex items-center text-xl space-x-6">
            {/* Home Link */}
            <NavLink
              to="/"
              className="font-semibold hover:bg-blue-600 px-3 py-2 rounded-md"
            >
              Home
            </NavLink>

            {/* Dropdown Menu for Committees */}
            <div className="relative group w-max">
              <NavLink className="font-semibold hover:bg-blue-600 px-3 py-2 rounded-md flex items-center justify-between w-full">
                <span>Committees</span>
                <span className="ml-1">▼</span>
              </NavLink>
              <div className="absolute hidden text-sm group-hover:flex flex-col bg-white border rounded-md shadow-lg mt-2 w-full z-10">
                <ul className="cursor-pointer">
                  <NavLink to={"/patrons"}>
                    <li className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                      Patrons & Chairs
                    </li>
                  </NavLink>
                  <NavLink to={"/organising-committee"}>
                    <li className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                      Organising Committee
                    </li>
                  </NavLink>
                  <NavLink to={"/advisory-committee"}>
                    <li className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                      Advisory Committee
                    </li>
                  </NavLink>
                  <NavLink to={"/technical-committee"}>
                    <li className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                      Technical Program Committee
                    </li>
                  </NavLink>
                </ul>
              </div>
            </div>

            {/* Other Nav Links */}
            <NavLink
              to="/schedule"
              className="font-semibold hover:bg-blue-600 px-3 py-2 rounded-md"
            >
              Conference Schedule
            </NavLink>
            <NavLink
              to="/guidelines"
              className="font-semibold hover:bg-blue-600 px-3 py-2 rounded-md"
            >
              Author's Guidelines
            </NavLink>
            <NavLink
              to="/registration"
              className="font-semibold hover:bg-blue-600 px-3 py-2 rounded-md"
            >
              Registration
            </NavLink>

            {/* Dropdown Menu for Venue and Travels */}
            <div className="relative group">
              <NavLink
                to="#"
                className="font-semibold hover:bg-blue-600 px-3 py-2 rounded-md"
              >
                Venue and Travel
              </NavLink>
              <div className="absolute hidden text-sm group-hover:flex flex-col bg-white border rounded-md shadow-lg mt-2 w-48 z-10">
                <NavLink
                  to="/venue"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Conference Venue
                </NavLink>
                <NavLink
                  to="/accommodation"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Accommodations
                </NavLink>
                <NavLink
                  to="/tourist-places"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Tourist Places Nearby
                </NavLink>
              </div>
            </div>

            <NavLink
              to="/contact"
              className="font-semibold hover:bg-blue-600 px-3 py-2 rounded-md"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
