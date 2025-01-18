import React from "react";
import { NavLink } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <div className="p-4 text-white bg-blue-500 hidden md:flex items-center justify-around">
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
            <NavLink
              to="/committee"
              className="font-semibold hover:bg-blue-600 px-3 py-2 rounded-md"
            >
              Organising Committees
            </NavLink>
            {/* <div className="absolute hidden text-sm group-hover:flex flex-col bg-white border rounded-md shadow-lg mt-2 w-48 z-10">
              <NavLink
                to="/committee/patrons"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
              >
                Patrons
              </NavLink>
              <NavLink
                to="/chairs"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
              >
                Chairs
              </NavLink>
              <NavLink
                to="/working-committee"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
              >
                Working Committee
              </NavLink>
              <NavLink
                to="/advisory-committee"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
              >
                Advisory Committee
              </NavLink>
              <NavLink
                to="/technical-committee"
                className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
              >
                Technical Program Committee
              </NavLink>
            </div> */}
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
