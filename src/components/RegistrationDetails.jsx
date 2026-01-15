import React from "react";

const RegistrationDetails = () => {
  return (
    <div className="p-2 sm:p-4">
      <div className="flex justify-center items-center">
        <div className="w-full max-w-2xl">
          <div className="border-2 border-gray-400 rounded-lg overflow-x-auto">
            <table className="border-collapse bg-white shadow-lg w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                  <th className="px-2 sm:px-4 py-2 lg:py-4 text-left font-bold text-xs sm:text-sm border-r border-blue-700">
                    Description
                  </th>
                  <th className="px-1 sm:px-4 py-2 lg:py-4 text-center font-bold text-xs sm:text-sm border-r border-blue-700">
                    Type
                  </th>
                  <th className="px-1 sm:px-4 py-2 lg:py-4 text-center font-bold text-xs sm:text-sm border-r border-blue-700">
                    <span className="hidden sm:inline">Indian Author</span>
                    <span className="sm:hidden">Indian</span>
                    <span className="block text-xs">(INR)</span>
                  </th>
                  <th className="px-1 sm:px-4 py-2 lg:py-4 text-center font-bold text-xs sm:text-sm">
                    <span className="hidden sm:inline">International Author</span>
                    <span className="sm:hidden">Int'l</span>
                    <span className="block text-xs">(USD)</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200">
                  <td className="px-2 sm:pl-4 py-2 font-bold text-gray-800 text-xs sm:text-sm">
                    <span className="hidden sm:inline">Academician/Research Scholar</span>
                    <span className="sm:hidden">Academician/ Scholar</span>
                  </td>
                  <td className="px-1 py-2 text-center border-l border-gray-200">
                    <div className="space-y-1">
                      <span className="block text-blue-700 font-semibold text-xs sm:text-sm">
                        IEEE
                      </span>
                      <span className="block text-gray-500 text-xs sm:text-sm">
                        NON-IEEE
                      </span>
                    </div>
                  </td>
                  <td className="px-1 py-2 text-center border-l border-gray-200">
                    <div className="space-y-1">
                      <span className="block text-blue-700 font-semibold text-xs sm:text-sm">
                        7,000
                      </span>
                      <span className="block text-gray-500 text-xs sm:text-sm">8,000</span>
                    </div>
                  </td>
                  <td className="px-1 py-2 text-center border-l border-gray-200">
                    <div className="space-y-1">
                      <span className="block text-blue-700 font-semibold text-xs sm:text-sm">
                        200
                      </span>
                      <span className="block text-gray-500 text-xs sm:text-sm">250</span>
                    </div>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="border-b border-gray-200 bg-gray-50 hover:bg-blue-50 transition-colors duration-200">
                  <td className="px-2 sm:pl-3 py-2 font-bold text-gray-800 text-xs sm:text-sm">
                    UG/PG Student
                  </td>
                  <td className="px-1 py-2 text-center border-l border-gray-200">
                    <div className="space-y-1">
                      <span className="block text-blue-700 font-semibold text-xs sm:text-sm">
                        IEEE
                      </span>
                      <span className="block text-gray-500 text-xs sm:text-sm">
                        NON-IEEE
                      </span>
                    </div>
                  </td>
                  <td className="px-1 py-2 text-center border-l border-gray-200">
                    <div className="space-y-1">
                      <span className="block text-blue-700 font-semibold text-xs sm:text-sm">
                        6,000
                      </span>
                      <span className="block text-gray-500 text-xs sm:text-sm">7,000</span>
                    </div>
                  </td>
                  <td className="px-1 py-2 text-center border-l border-gray-200">
                    <div className="space-y-1">
                      <span className="block text-blue-700 font-semibold text-xs sm:text-sm">
                        100
                      </span>
                      <span className="block text-gray-500 text-xs sm:text-sm">150</span>
                    </div>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200">
                  <td className="px-2 sm:pl-3 py-2 font-bold text-gray-800 text-xs sm:text-sm">
                    Industry
                  </td>
                  <td className="px-1 py-2 text-center border-l border-gray-200">
                    <div className="space-y-1">
                      <span className="block text-blue-700 font-semibold text-xs sm:text-sm">
                        IEEE
                      </span>
                      <span className="block text-gray-500 text-xs sm:text-sm">
                        NON-IEEE
                      </span>
                    </div>
                  </td>
                  <td className="px-1 py-2 text-center border-l border-gray-200">
                    <div className="space-y-1">
                      <span className="block text-blue-700 font-semibold text-xs sm:text-sm">
                        8,000
                      </span>
                      <span className="block text-gray-500 text-xs sm:text-sm">9,000</span>
                    </div>
                  </td>
                  <td className="px-1 py-2 text-center border-l border-gray-200">
                    <div className="space-y-1">
                      <span className="block text-blue-700 font-semibold text-xs sm:text-sm">
                        200
                      </span>
                      <span className="block text-gray-500 text-xs sm:text-sm">250</span>
                    </div>
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="bg-gray-50 hover:bg-blue-50 transition-colors duration-200">
                  <td className="px-2 sm:px-3 py-2 sm:py-3 font-bold text-gray-800 text-xs sm:text-sm">
                    Co-Author/Attendee
                  </td>
                  <td className="px-1 sm:px-3 py-2 sm:py-3 text-center border-l border-gray-200">
                    <span className="text-gray-400 text-xs sm:text-sm">—</span>
                  </td>
                  <td className="px-1 sm:px-3 py-2 sm:py-3 text-center border-l border-gray-200">
                    <span className="text-blue-700 font-semibold text-xs sm:text-sm">2,500</span>
                  </td>
                  <td className="px-1 sm:px-3 py-2 sm:py-3 text-center border-l border-gray-200">
                    <span className="text-blue-700 font-semibold text-xs sm:text-sm">75</span>
                  </td>
                </tr>

                {/* Row 5 */}
                <tr className="hover:bg-blue-50 transition-colors duration-200">
                  <td className="px-2 sm:px-3 py-2 sm:py-3 font-bold text-gray-800 text-xs sm:text-sm">
                    Poster Registration
                  </td>
                  <td className="px-1 sm:px-3 py-2 sm:py-3 text-center border-l border-gray-200">
                    <span className="text-gray-400 text-xs sm:text-sm">—</span>
                  </td>
                  <td className="px-1 sm:px-3 py-2 sm:py-3 text-center border-l border-gray-200">
                    <span className="text-blue-700 font-semibold text-xs sm:text-sm">1,200</span>
                  </td>
                  <td className="px-1 sm:px-3 py-2 sm:py-3 text-center border-l border-gray-200">
                    <span className="text-blue-700 font-semibold text-xs sm:text-sm">25</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationDetails;
