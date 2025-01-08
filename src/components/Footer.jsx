import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200">
      {/* Images Section */}
      <div className="flex justify-center items-center mb-6 pt-5">
        <img
          src={assets.mru_logo}
          alt="Footer Image 1"
          className="h-16 w-30 mx-2 rounded"
        />
        <img
          src={assets.icass2025}
          alt="Footer Image 2"
          className="h-16 w-30 mx-2 rounded"
        />
      </div>

      {/* Text Section */}
      <div className="text-center mb-8">
        <p className="text-lg">
          Manav Rachna University, Faridabad, Haryana, India
        </p>
      </div>

      {/* Useful Links and Socials */}
      <div className="grid grid-cols-2 gap-8 px-8 md:px-20">
        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-500 inline-block">
            Useful Links
          </h3>
          <ul className="list-none space-y-2">
            <li>
              <NavLink
                to={"/about"}
                className="text-gray-900 hover:cursor-pointer transition"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/events"}
                className="text-gray-900 hover:cursor-pointer transition"
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className="text-gray-900 hover:cursor-pointer transition"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/privacy-policy"}
                className="text-gray-900 hover:cursor-pointer transition"
              >
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-500 inline-block">
            Socials
          </h3>
          <ul className="list-none space-y-2">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:cursor-pointer transition"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:cursor-pointer transition"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:cursor-pointer transition"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:cursor-pointer transition"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-8 text-sm text-gray-400">
        &copy;ICASS-2026. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
