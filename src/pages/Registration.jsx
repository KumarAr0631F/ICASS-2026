import React from "react";
import { NavLink } from "react-router-dom";
import RegistrationGuidelines from "../components/RegistrationGuidelines";
import ImportantDates from "../components/ImportantDates";
import RegistrationDetails from "../components/RegistrationDetails";
import AccountDetails from "../components/AccountDetails";
import DiscountTable from "../components/DiscountTable";

const Registration = () => {
  return (
    <div className="min-h-screen flex justify-center bg-gray-50 overflow-x-hidden">
      <div className="container mx-auto p-4 w-full">
        <ImportantDates/>

        {/* ------------------ Registration Details ------------------ */}
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mt-8 mb-4 lg:mb-6 text-blue-700">
          Registration Details
        </h1>
        <RegistrationDetails/>

        {/* ------------------ Early Bird Registration ------------------ */}
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mt-8 mb-4 lg:mb-6 px-4">
          <span className="text-red-700">
            !!Early Bird Registration Closed Now!!
          </span>
          <span className="block text-sm sm:text-base font-medium text-gray-600 mt-2">
            Register on or before <span className="line-through">21st December</span> 24th December, 2025, 5:00 PM IST
          </span>
        </h2>
        <DiscountTable/>

        {/* Extra Charges Note */}
        <div className="pt-6 text-red-600 text-justify">
          <p className="sm:text-md lg:text-lg">
            * Extra page charge of ₹1000/- INR per page (Indian author) and $50
            per page (International author) will be chargeable during the
            registration process.
          </p>
          
        </div>


        {/* ------------------ Account Details ------------------ */}
        <AccountDetails/>

        {/* Payment Instructions
        <div className="mt-6 bg-yellow-50 border-l-4  border-yellow-400 text-yellow-900 pl-5 pt-3 pb-3 rounded">
          <p className="font-semibold text-yellow-800 mb-2 text-center items-center justify-center">
            ⚠ Important Payment Instructions
          </p>
          <p>
            Please include your <strong>name</strong> and{" "}
            <strong>paper ID</strong> in the payment reference. Email the
            payment receipt to{" "}
            <a
              href="mailto:gangasharma@mru.edu.in"
              className="text-blue-600 underline"
            >
              gangasharma@mru.edu.in
            </a>{" "}
            for confirmation.
          </p>
        </div> */}

        {/* ------------------ Guidelines ------------------ */}
        <div className="pt-10 text-lg">
          <RegistrationGuidelines />
        </div>

        {/* ------------------ Submit Button ------------------ */}
        <div className="mt-4 flex justify-center gap-6">
          <NavLink
            to={"https://cmt3.research.microsoft.com/ICASS2026/"}
            className="bg-red-500 rounded-lg cursor-pointer px-6 py-2.5 text-white font-medium hover:bg-red-600 transition-all duration-300 shadow-md"
          >
            Submit Your Paper
          </NavLink>
          <NavLink
            to={"https://cmt3.research.microsoft.com/ICASS2026/"}
            className="bg-red-500 rounded-lg cursor-pointer px-6 py-2.5 text-white font-medium hover:bg-red-600 transition-all duration-300 shadow-md"
          >
            Submit Your Poster
          </NavLink>
        </div>
        <div className="mt-4 flex justify-center gap-6">
          <NavLink
            to={"https://forms.gle/w4emCbWMPtnp5tfF8"}
            target="_blank"
            className="bg-red-500 rounded-lg cursor-pointer px-3 py-2.5 text-white font-medium hover:bg-red-600 transition-all duration-300 shadow-md"
          >
            ICASS 2026 Paper Registration form
          </NavLink>

          <NavLink
            to={"https://forms.gle/w4emCbWMPtnp5tfF8"}
            target="_blank"
            className="bg-red-500 rounded-lg cursor-pointer px-3 py-2.5 text-white font-medium hover:bg-red-600 transition-all duration-300 shadow-md"
          >
            Register Your Poster Here
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Registration;
