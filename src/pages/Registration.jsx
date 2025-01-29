import React from "react";
import { NavLink } from "react-router-dom";

const Registration = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="container mx-auto p-4">
        <div className="text-center">
          <h1 className="text-3xl text-blue-700 mb-5">
            <b>Important Dates</b>
          </h1>
          <div className="flex justify-center items-center">
            <ul className="text-xl list-disc mb-5 list-inside text-start">
              <li className="sm:text-lg">
                Submission Date: 30<sup>th</sup> November, 2025
              </li>
              <li className="sm:text-lg">
                Notification of Acceptance: 10<sup>th</sup> January, 2026
              </li>
              <li className="sm:text-lg">
                Camera-Ready/Final Paper Submission: 25<sup>th</sup> January,
                2026
              </li>
              <li className="sm:text-lg">
                Early Bird Registration: 28<sup>th</sup> January, 2026
              </li>
              <li className="sm:text-lg">
                Conference Date: 12<sup>th</sup>-13<sup>th</sup> February, 2026
              </li>
            </ul>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
          Registration Details
        </h1>
        <div className="overflow-x-hidden">
          <div className="mx-auto flex justify-center text-sm">
            <table className="table-auto w-[60%] max-w-[90%] border border-gray-700 bg-white shadow-lg rounded-lg table-layout-fixed">
              <thead className="border border-gray-700">
                <tr className="bg-gray-200 text-gray-800">
                  <th className="px-2 py-2 text-center border border-gray-700">
                    Description
                  </th>
                  <th className="px-2 py-2 text-center border border-gray-700">
                    Type
                  </th>
                  <th className="px-2 py-2 text-center border border-gray-700">
                    Indian Author (Rs)
                  </th>
                  <th className="px-2 py-2 text-center border border-gray-700">
                    International Author ($)
                  </th>
                </tr>
              </thead>
              <tbody className="border border-gray-700">
                <tr className="border border-gray-700">
                  <td className="px-2 py-2 border border-gray-700 break-words text-xs sm:text-base lg:text-lg">
                    Academician/Research Scholar
                  </td>
                  <td className="px-2 py-2 border text-center border-gray-700">
                    IEEE <br /> NON-IEEE
                  </td>
                  <td className="px-2 py-2 border text-center border-gray-700">
                    7000 <br />
                    8000
                  </td>
                  <td className="px-2 py-2 border text-center border-gray-700">
                    200 <br /> 250
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="px-2 py-2 border border-gray-700 break-words text-xs sm:text-base lg:text-lg">
                    UG/PG Student
                  </td>
                  <td className="px-2 py-2 border text-center border-gray-700">
                    IEEE <br /> NON-IEEE
                  </td>
                  <td className="px-2 py-2 border text-center border-gray-700">
                    6000 <br /> 7000
                  </td>
                  <td className="px-2 py-2 border text-center border-gray-700">
                    100 <br /> 150
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="px-2 py-2 border border-gray-700 break-words text-xs sm:text-base lg:text-lg">
                    Industry
                  </td>
                  <td className="px-2 py-2 border text-center border-gray-700">
                    IEEE <br /> NON-IEEE
                  </td>
                  <td className="px-2 py-2 border text-center border-gray-700">
                    8000 <br /> 9000
                  </td>
                  <td className="px-2 py-2 border text-center border-gray-700">
                    200 <br /> 250
                  </td>
                </tr>

                <tr className="border border-gray-700">
                  <td className="px-2 py-2 border border-gray-700 break-words text-xs sm:text-base lg:text-lg">
                    Co-Author/Attendee
                  </td>
                  <td className="px-2 py-2 border text-center border-gray-700">
                    IEEE <br /> NON-IEEE
                  </td>
                  <td className="px-2 py-2 border text-center border-gray-700">
                    2500
                  </td>
                  <td className="px-2 py-2 border text-center border-gray-700">
                    75
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pt-6 text-red-600 text-justify">
            <p className="text-xl">
              * Extra page charge of ₹1000/- INR per page (Indian author) and
              $50 per page (International author) will be chargeable to the
              author's during registration process.
            </p>
          </div>
          <div className="flex justify-center items-center pt-10">
            <div>
              <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
                Account Details
              </h1>
              <table className="table-auto border border-gray-700 bg-white shadow-lg rounded-lg">
                <tbody className="border border-gray-700">
                  <tr className="border border-gray-700">
                    <td className="px-4 py-2 border border-gray-700">
                      Name of Account
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      Manav Rachna University
                    </td>
                  </tr>
                  <tr className="border border-gray-700">
                    <td className="px-4 py-2 border border-gray-700">
                      Account Number
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      XXXXXXXXXXXXXXX
                    </td>
                  </tr>
                  <tr className="border border-gray-700">
                    <td className="px-4 py-2 border border-gray-700">
                      IFSC Code
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      2030XXXXX6000
                    </td>
                  </tr>
                  <tr className="border border-gray-700">
                    <td className="px-4 py-2 border border-gray-700">
                      Bank Name
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      HDFC Bank
                    </td>
                  </tr>
                  <tr className="border border-gray-700">
                    <td className="px-4 py-2 border border-gray-700">
                      SWIFT Code
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      XXXXXXXXXXXX
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-7 flex justify-center">
            <NavLink
              to={"https://cmt3.research.microsoft.com/User/Login"}
              className="bg-red-500 rounded-lg cursor-pointer p-2.5 m-4 text-white hover:bg-red-600 transition-all duration-300"
            >
              Submit Your Paper
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
