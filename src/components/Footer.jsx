import "./Footer.css"
import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8 items-center">
      {/* Images and Text Section */}
      <div className="  items-center mb-6 manavheadig">
        {/* Images Section */}
        <div className="flex justify-center items-center flex-wrap gap-4">
          <img
            src={assets.mru_logo}
            alt="Footer Image 1"
            className="h-16 w-auto mx-2 rounded"
          />
          <img
            src={assets.icass2026}
            alt="Footer Image 2"
            className="h-16 w-auto mx-2 rounded"
          />
        </div>
        {/* Text Below Images */}
          <p className="text-lg text-gray-700 mt-4">
            Manav Rachna University, Faridabad, Haryana, India
          </p>
      </div>

      {/* Useful Links and Socials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-8 md:px-20 md:justify-items-center">
        {/* Useful Links */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-500 inline-block">
            Useful Links
          </h3>
          <ul className="list-none space-y-2">
            <li>
              <NavLink
                to={"/about"}
                className="text-gray-900 hover:text-blue-500 transition"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/events"}
                className="text-gray-900 hover:text-blue-500 transition"
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className="text-gray-900 hover:text-blue-500 transition"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/privacy-policy"}
                className="text-gray-900 hover:text-blue-500 transition"
              >
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-500 inline-block">
            Socials
          </h3>
          <ul className="list-none space-y-2">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-blue-500 transition"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-blue-500 transition"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-blue-500 transition"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-blue-500 transition"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-8 text-sm text-gray-500 px-4">
        &copy; ICASS-2026. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
