import React from "react";
import { assets } from "../assets/assets";

const PreConferenceWorkshop = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-red-50 to-purple-100 p-6">
      <div className="max-w-4xl w-full grid gap-6">
        {/* Heading Card */}
        <div className="p-6">
          <h1 className="text-4xl font-bold text-blue-600  rounded-lg mb-2 text-center">
            Pre Conference Workshop
          </h1>
        </div>

        {/* Topic Card */}
        <div>
          <h2 className="text-2xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg mb-2 text-center">
            Topic: Quantum Computing
          </h2>
        </div>

        {/* Date, Time, Venue Card */}
        <div className="rounded-xl shadow-lg bg-white p-6">
          <h3 className="text-2xl font-semibold text-blue-700 mb-3 text-center">
            Details
          </h3>
          <p className="text-gray-600 text-lg mb-2">
            Date:{" "}
            <span className="font-medium text-gray-800">11 February 2026</span>
          </p>
          <p className="text-gray-600 text-lg mb-2">
            Time:{" "}
            <span className="font-medium text-gray-800">9:00 AM – 5:00 PM</span>
          </p>
          <p className="text-gray-600 text-lg mb-2">
            Venue:{" "}
            <span className="font-medium text-gray-800">
              Manav Rachna University
            </span>
          </p>
          <p className="text-gray-600 text-lg mb-2">
            Partner:{" "}
            <span className="font-medium text-gray-800">C-DAC, Bangalore</span>
          </p>
          <div>
            <img src={assets.CDAC} className="w-24 h-24" alt="CDAC logo" />
          </div>
        </div>

        {/* Workshop Overview Card */}
        <div className="rounded-xl shadow-lg bg-white p-6">
          <h3 className="text-xl font-semibold text-purple-600 mb-3 text-center">
            Workshop Overview
          </h3>
          <p className="text-gray-600 text-lg text-justify mb-2">
            Quantum Computing is revolutionizing the way we solve complex
            problems in cryptography, optimization, artificial intelligence, and
            scientific simulations. This workshop aims to provide participants
            with an understanding of the fundamentals of quantum mechanics for
            computing, quantum algorithms, and the practical implementation of
            quantum programs using emerging platforms.
          </p>
        </div>

        {/* Topic Covered Card */}
        <div className="rounded-xl shadow-lg bg-white p-6">
          <h3 className="text-xl font-semibold text-purple-600 mb-3 text-center">
            Topic Covered
          </h3>
          <p className="text-gray-600 text-lg text-justify mb-2">
            Introduction to Quantum computation, Quantum bits, Single qubit
            operations, Postulates of quantum mechanics, Quantum Measurement,
            Bell states, Quantum Gates, Single qubit gates, Pauli Gates,
            Hadamard gate, Quantum Circuits, Multi-qubit gates, CNOT gate,
            Toffoli Gate, Fredkin Gate, Universal quantum gates.
          </p>

          <p className="text-gray-600 text-lg text-justify mb-2">
            Hands-on session using Qniverse – A unified Quantum Computing
            Platform, designing quantum circuits and implementing quantum
            algorithms using Qniverse Platform, Grover’s Search Algorithm,
            Deutsch Algorithm, K-Means, and QNN algorithms.
          </p>
        </div>

        <div className="rounded-xl shadow-lg bg-white p-6">
          <h3 className="text-xl font-semibold text-green-600 mb-3 text-center">
            Target Audience
          </h3>
          <ul className="list-disc list-inside text-gray-700 text-lg">
            <li>Faculty, researchers, and industry professionals</li>
            <li>
              UG/PG/PhD students from Computer Science, Mathematics, Physics,
              and related fields
            </li>
            <li>Enthusiasts exploring next-generation computing paradigms</li>
          </ul>
        </div>

        <div className="rounded-xl shadow-lg bg-white p-6">
          <h3 className="text-xl font-semibold text-orange-600 mb-3 text-center">
            Benefits to participants
          </h3>
          <ul className="list-disc list-inside text-gray-700 text-lg">
            <li>Registration Kit</li>
            <li>Refreshment and Lunch</li>
            <li>Certificate of Participation from C-DAC</li>
            <li>
              Accounts on Qniverse – A unified Quantum Computing Platform (150
              credits)- <b>FREE</b>
            </li>
          </ul>
        </div>

        {/* Registration Fee and Seats Card */}
        <div className="rounded-xl shadow-lg bg-white p-6">
          <h3 className="text-xl font-semibold text-red-600 mb-3 text-center">
            Registration Details and Payment
          </h3>
          <p className="text-gray-600 text-lg mb-2">
            Registration Fee:{" "}
            <span className="font-medium text-gray-800">
              ₹5,000 per participant
            </span>
          </p>
          <p className="text-gray-600 text-lg mb-2">
            Seats Available:{" "}
            <span className="font-medium text-gray-800">30</span>
          </p>
          <p>Bank Details (For NEFT/RTGS/IMPS)</p>
          <div className="flex flex-col lg:flex-row justify-center items-center mt-3">
            <table className="table-auto flex lg:ml-5 lg:w-[55%] justify-center items-center bg-white border-collapse border border-gray-300 shadow-md">
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
          <div className="flex justify-center mt-4">
            <a href="https://forms.gle/3eCR54EaBUvVxTqx9" target="_blank" className="bg-blue-600 hover:bg-blue-700 text-center text-white px-4 py-2 rounded-md">
              Click here to Register for Workshop
            </a>
          </div>
        </div>

        {/* Notes Card */}
        <div className="rounded-xl shadow-lg bg-white p-6">
          <h3 className="font-semibold mb-2 text-center text-xl text-red-600">
            **Note**
          </h3>
          <ul className="list-disc list-inside text-gray-600 text-base mx-auto max-w-md">
            <li>No TA/DA will be paid to attend the workshop</li>
            <li>Registration fees once paid are non-refundable</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PreConferenceWorkshop;
