import React from "react";

const ImportantDates = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl text-blue-700 mb-6 font-bold">
          Important Dates
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full px-4">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-5 shadow-sm flex flex-col items-start">
              <div className="flex items-center w-full mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="16"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M16 3v4M8 3v4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                {/* horizontal line after the icon */}
                <div className="flex-1 h-1 bg-blue-300 ml-4" />
              </div>
              <h3 className="text-base font-semibold text-gray-800 mb-1 text-left">
                Full paper Submission
              </h3>
              <div className="text-left">
                <p className="text-sm text-gray-400 line-through">
                  30<sup>th</sup> September, 2025
                </p>
                <p className="text-sm text-gray-400 line-through">
                  15<sup>th</sup> October, 2025
                </p>
                <p className="text-sm text-gray-400 line-through">
                  15<sup>th</sup> November, 2025{" "}
                </p>
                <p className="mt-1 text-green-600 font-semibold">
                  30<sup>th</sup> November, 2025{" "}
                  <span className="text-red-600">(Hard Deadline)</span>{" "}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg p-5 shadow-sm flex flex-col items-start">
              <div className="flex items-center w-full mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="16"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M16 3v4M8 3v4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="flex-1 h-1 bg-blue-300 ml-4" />
              </div>
              <h3 className="text-base font-semibold text-gray-800 mb-1 text-left">
                Notification of Acceptance
              </h3>
              <p className="text-gray-600 line-through font-semibold text-left">
                20<sup>th</sup> December, 2025
              </p>
              <p className="text-green-600 font-semibold text-left">
                31<sup>st</sup> December, 2025
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg p-5 shadow-sm flex flex-col items-start">
              <div className="flex items-center w-full mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="16"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M16 3v4M8 3v4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="flex-1 h-1 bg-blue-300 ml-4" />
              </div>
              <h3 className="text-base font-semibold text-gray-800 mb-1 text-left">
                Registration Deadline
              </h3>
              <p className="text-gray-600 line-through font-semibold text-left">
                28<sup>th</sup> December, 2025
              </p>
              <p className="text-gray-600 line-through font-semibold text-left">
                5<sup>th</sup> January, 2026
              </p>
              <p className="text-green-600 font-semibold text-left">
                10<sup>th</sup> January, 2026
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg p-5 shadow-sm flex flex-col items-start">
              <div className="flex items-center w-full mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="16"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M16 3v4M8 3v4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="flex-1 h-1 bg-blue-300 ml-4" />
              </div>
              <h3 className="text-base font-semibold text-gray-800 mb-1 text-left">
                Camera-Ready Submission Deadline
              </h3>
              <p className="text-gray-600 line-through font-semibold text-left">
                5<sup>th</sup> January, 2026
              </p>
              <p className="text-gray-600 line-through font-semibold text-left">
                10<sup>th</sup> January, 2026
              </p>
              <p className="text-green-600 font-semibold text-left">
                15<sup>th</sup> January, 2026
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-lg p-5 shadow-sm flex flex-col items-start">
              <div className="flex items-center w-full mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="16"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M16 3v4M8 3v4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="flex-1 h-1 bg-blue-300 ml-4" />
              </div>
              <h3 className="text-base font-semibold text-gray-800 mb-1 text-left">
                {" "}
                Conference Date(s):
              </h3>
              <p className="text-green-600 font-semibold text-left">
                12<sup>th</sup>-13<sup>th</sup> February, 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantDates;
