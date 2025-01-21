import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-5 items-center">
      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 px-4">
        &copy; ICASS-2026. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
