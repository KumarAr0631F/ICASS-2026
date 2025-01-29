import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  
  return (
    <div className="flex justify-center text-3xl items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-blue-700  mb-4">Contact Information</h2>
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <tbody>
            <tr>
              <td className="border border-gray-900 px-4 py-2">For General Enquiries</td>
              <td className="border border-gray-900 px-4 py-2">icass2026@mru.edu.in</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-900 px-4 py-2">For Conference related Enquiries</td>
              <td className="border border-gray-900 px-4 py-2">icass2026@mru.edu.in</td>
            </tr>
            <tr>
              <td className="border border-gray-900 px-4 py-2">For Paper related Enquiries</td>
              <td className="border border-gray-900 px-4 py-2">icass2026@mru.edu.in</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
