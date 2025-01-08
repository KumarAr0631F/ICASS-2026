import React from "react";

const Guideline = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100">
        <p className="flex justify-center font-bold text-blue-500 text-3xl mt-4 mb-3">
          Conference Guidelines
        </p>
        <h3 className="flex justify-center font-bold text-6xl mt-2">
          Author's Guidelines
        </h3>
        <div className="flex items-center justify-center text-lg mt-5">
          <p className="text-justify text-gray-900 flex justify-center items-center w-1/2 ">
            Authors are invited to submit original, high-quality, and previously
            unpublished research articles. Submissions must not be under review
            by any other publication or conference. All manuscripts should be
            submitted electronically via Microsoft CMT in strict adherence to
            the IEEE standard two-column conference template, which can be
            accessed through the provided link. Each manuscript is limited to a
            maximum of six (6) pages, including figures, tables, and references.
            Additional pages may be accommodated with a nominal fee.
          </p>
        </div>
        <div className="flex justify-around p-10 m-10">
          <h3 className="text-3xl font-bold p-2.5 m-3">
            Paper Formatting Guidelines
          </h3>
          <button className="bg-blue-500 hover:bg-blue-600 text-white p-2.5 m-3 rounded-lg">
            Download Template
          </button>
        </div>

        {/* 7 Points Section */}
        <div className="flex justify-center mt-5">
          <div className="p-6 rounded-lg w-3/4">
            <ul className="list-decimal text-lg pl-5 text-gray-900 text-lg">
              <li>Paper Size: US Letter (8.5" x 11").</li>
              <li>
                Paper Length: Maximum of 6 pages, including figures, tables, and
                references. Two additional pages are permitted with a charge of
                ₹ 1000 per page (Indian authors) or $50 per page (International
                authors).
              </li>
              <li>
                Formatting: Double-column layout, single-spaced, using 10pt
                Times New Roman font.
              </li>
              <li>
                Margins: Top: 1" (25 mm) on the title page; 0.75" (19 mm)
                elsewhere. Left, Right, and Bottom margins: 0.75" (19 mm).
              </li>
              <li>
                File Format: PDF, with a maximum size of 5MB. All fonts must be
                embedded.
              </li>
              <li>No page numbering should be included in the manuscript.</li>
              <li>
                Use the IEEE MS Word template provided via the link above for
                proper formatting.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guideline;
