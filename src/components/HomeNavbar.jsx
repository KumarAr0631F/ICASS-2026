import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

const HomeNavbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="p-1 text-white bg-blue-500 hidden md:flex items-center justify-around">
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
          <div className="relative group">
            <NavLink className="font-semibold hover:bg-blue-600 px-3 py-2 rounded-md">
              Committees
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
              Venue and Travels
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
  );
};

export default HomeNavbar;
