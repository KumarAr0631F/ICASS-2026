import React from "react";
import { NavLink } from "react-router-dom";

const PDF_FILE_URL = "https://icass-2026.vercel.app/ieee_copyright_process.pdf";

const Guideline = () => {
  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* Author's Guidelines Section */}
      <div className="flex flex-col items-center justify-center p-4 sm:p-10 mt-6 w-full sm:w-3/4 lg:w-2/3">
        <h3 className="text-3xl text-blue-600 font-bold p-2 m-3 text-center">
          Author's Guidelines
        </h3>

        <div className="p-4 sm:p-6 rounded-lg w-full">
          <p className="text-justify text-gray-900 text-base sm:text-lg">
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
      </div>

      {/* Paper Formatting Guidelines Section */}
      <div className="flex flex-col items-center justify-center p-4 sm:p-10 mt-2 w-full sm:w-3/4 lg:w-2/3">
        <h3 className="text-2xl text-blue-600 sm:text-3xl font-bold p-2 m-3 text-center">
          Paper Formatting Guidelines
        </h3>
        <div className="p-4 sm:p-6 rounded-lg w-full">
          <ul className="list-decimal text-justify sm:text-lg pl-5 text-gray-900">
            <li>Paper Size: US Letter (8.5" x 11").</li>
            <li>
              Paper Length: Maximum of 6 pages, including figures, tables, and
              references. Two additional pages are permitted with a charge of ₹
              1000 per page (Indian authors) or $50 per page (International
              authors).
            </li>
            <li>
              Formatting: Double-column layout, single-spaced, using 10pt Times
              New Roman font.
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

      {/* General Instructions Section */}
      <div className="flex flex-col items-center text-justify p-4 sm:p-10 mt-6 bg-gray-100 rounded-lg w-full sm:w-3/4 lg:w-2/3">
        <h3 className="text-2xl sm:text-3xl font-bold p-2 mb-4 text-center text-blue-600">
          General Instructions
        </h3>
        <div className="p-4 sm:p-6 rounded-lg w-full">
          <ul className="list-decimal text-base sm:text-lg pl-5 space-y-3 text-gray-800 leading-relaxed">
            <li>Papers violating formatting guidelines may be rejected.</li>
            <li>
              Submissions must be original, unpublished work not under review
              elsewhere.
            </li>
            <li>
              Simultaneous submissions to other conferences or journals are
              prohibited.
            </li>
            <li>
              All manuscripts must be written in English and prepared as a PDF
              document.
            </li>
            <li>
              Papers should strictly adhere to the IEEE two-column format with
              10pt font size.
            </li>
            <li>
              The page limit is six (6) pages. An additional two pages are
              allowed with extra charges as specified in the{" "}
              <NavLink
                to="/registration"
                onClick={() => window.scrollTo(0, 0)}
                className="text-blue-700 underline"
              >
                registration details.
              </NavLink>
            </li>
            <li>
              All figures, tables, and references must fit within the page
              limit.
            </li>
            <li>
              Papers will be reviewed based on originality, significance,
              technical quality, and clarity.
            </li>
            <li>
              The decision to accept or reject a paper rests with the Technical
              Program Committee.
            </li>
            <li>
              Accepted papers must address reviewers' comments and meet final
              submission requirements.
            </li>
            <li>
              The Conference Chair reserves the right to exclude papers not
              presented or meeting guidelines from the proceedings.
            </li>
            <li>All submissions should be made via Microsoft CMT.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Guideline;
