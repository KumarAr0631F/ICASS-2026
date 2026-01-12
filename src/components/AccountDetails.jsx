import React from "react";
import { assets } from "../assets/assets";

const AccountDetails = () => {
  return (
    <div>
      <div className="flex justify-center text-sm items-center pt-10">
        <div>
          <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
            Account Details
          </h1>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="overflow-x-auto w-full lg:w-auto lg:ml-5">
            <table className="table-auto bg-white border-collapse border border-gray-300 shadow-md min-w-[300px] max-w-[400px]">
              <tbody className="border border-gray-700">
                <tr className="border border-gray-700">
                  <td className="px-4 py-2 border border-gray-700">
                    Name of Account
                  </td>
                  <td className="px-4 py-2 border border-gray-700">
                    Manav Rachna University Operations
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="px-4 py-2 border border-gray-700">
                    Account Number
                  </td>
                  <td className="px-4 py-2 border border-gray-700">
                    50200050331373
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="px-4 py-2 border border-gray-700">
                    IFSC Code
                  </td>
                  <td className="px-4 py-2 border border-gray-700">
                    HDFC0002549
                  </td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="px-4 py-2 border border-gray-700">
                    SWIFT Code
                  </td>
                  <td className="px-4 py-2 border border-gray-700">HDFCINBB</td>
                </tr>
                <tr className="border border-gray-700">
                  <td className="px-4 py-2 border border-gray-700">
                    Bank Name (with branch address)
                  </td>
                  <td className="px-4 py-2 border border-gray-700 break-words">
                    HDFC Bank, H Block, opposite Celebrity Homes, Palam Vihar,
                    Gurgaon-122017, Haryana
                  </td>
                </tr>
              </tbody>
            </table>
            </div>

            <div className="flex lg:flex-col justify-center items-center mx-4 my-4 lg:my-0">
              <p className="text-2xl lg:text-4xl font-semibold text-blue-700">
                OR
              </p>
            </div>

            <div className="bg-blue-600 p-4 rounded-lg gap-10">
              <p className="text-white font-semibold text-2xl mb-3 text-center">
                Scan and Pay
              </p>
              <img
                src={assets.Payment_code}
                alt="UPI QR Code"
                className="w-40 h-40 border rounded shadow-md mb-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
