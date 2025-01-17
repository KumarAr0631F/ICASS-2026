import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Registration Details
        </h1>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-700 bg-white shadow-lg rounded-lg">
            <thead className="border border-gray-700">
              <tr className="bg-gray-200 text-gray-800">
                <th className="px-4 py-2 text-center border border-gray-700">
                  Registration Type
                </th>
                <th className="px-4 py-2 text-center border border-gray-700">
                  Country of Registration
                </th>
                <th className="px-4 py-2 text-center border border-gray-700">
                  IEEE Member
                </th>
                <th className="px-4 py-2 text-center border border-gray-700">
                  Non-IEEE Member
                </th>
              </tr>
            </thead>
            <tbody className="border border-gray-700">
              {/* Example Row 1 */}
              <tr className="border border-gray-700">
                <td className="px-4 py-2 border border-gray-700">
                  Regular Author
                </td>
                <td className="px-4 py-2 border border-gray-700">
                  India <br /> Foreigner
                </td>
                <td className="px-4 py-2 border border-gray-700">
                  7000 INR <br /> 350 USD
                </td>
                <td className="px-4 py-2 border border-gray-700">
                  9000 INR <br /> 400 USD
                </td>
              </tr>
              {/* Example Row 2 */}
              <tr className="border border-gray-700">
                <td className="px-4 py-2 border border-gray-700">
                  Student Author
                </td>
                <td className="px-4 py-2 border border-gray-700">
                  India <br /> Foreigner
                </td>
                <td className="px-4 py-2 border border-gray-700">
                  5000 INR <br /> 200 USD
                </td>
                <td className="px-4 py-2 border border-gray-700">
                  6000 INR <br /> 300 USD
                </td>
              </tr>
              {/* Add more rows as needed */}
              <tr className="border border-gray-700">
                <td className="px-4 py-2 border border-gray-700">Industry</td>
                <td className="px-4 py-2 border border-gray-700">
                  India <br /> Foreigner
                </td>
                <td className="px-4 py-2 border border-gray-700">
                  7000 INR <br /> 350 USD
                </td>
                <td className="px-4 py-2 border border-gray-700">
                  9000 INR <br /> 400 USD
                </td>
              </tr>

              <tr className="border border-gray-700">
                <td className="px-4 py-2 border border-gray-700">Attendee</td>
                <td className="px-4 py-2 border border-gray-700">
                  India <br /> Foreigner
                </td>
                <td className="px-4 py-2 border border-gray-700">
                  3000 INR <br /> 50 USD
                </td>
                <td className="px-4 py-2 border border-gray-700">
                  3500 INR <br /> 100 USD
                </td>
              </tr>
            </tbody>
          </table>
          <div className="pt-6 text-red-600">
            <p className="text-xl">
              * Extra page charge of ₹1000/- INR per page Indian author and $50
              per page International author will be chargeable to the author's
              during registration process.
            </p>
          </div>
          <div className="flex justify-center items-center pt-10">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
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
            <NavLink to={'https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICCSAI2025'} className="bg-red-500 rounded-lg cursor-pointer p-2.5 m-4 text-white hover:bg-red-600 transition-all duration-300">
              Submit Your Paper
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
