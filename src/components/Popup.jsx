import React, { useState } from "react";
import { assets } from "../assets/assets";

const Popup = ({ initialOpen = true }) => {
  const [open, setOpen] = useState(initialOpen);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div className="relative bg-white rounded-lg shadow-xl w-[90%] max-w-md mx-4 p-6">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={() => setOpen(false)}
          aria-label="Close popup"
        >
          ✕
        </button>

        <div className="flex flex-col items-center">
          <img
            src={assets.icass2026}
            alt="Conference Logo"
            className="w-64 h-24 object-contain"
          />
          <h2 className="text-xl font-bold text-center text-blue-700">
            1st International Conference on Intelligent Computing and Automation for Sustainable Solutions (ICASS-2026)
          </h2>
          <p className="mt-1 text-center text-3xl font-semibold text-red-600">
            Paper Submissions are Closed Now!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
