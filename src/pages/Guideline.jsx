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
      <div className="flex flex-col items-center justify-center p-4 sm:p-6 mt-4 w-full sm:w-3/4 lg:w-2/3">
        <h3 className="text-3xl text-blue-600 font-bold mb-3 text-center">
          Author's Guidelines
        </h3>
        <div className="p-4 sm:p-5 rounded-lg w-full">
          <p className="text-justify text-gray-900 text-base sm:text-lg">
            Authors are invited to submit original, high-quality, and previously
            unpublished research papers. Submissions should not be under review
            by any other journal or conference. All manuscripts must be
            submitted electronically via Microsoft CMT, following the IEEE
            standard two-column conference template, which is available through
            the provided link. Each manuscript is limited to a maximum of six
            (6) pages, including figures, tables, and references. Additional
            pages can be included for an additional fee.
          </p>
        </div>
      </div>

      {/* Paper Formatting Guidelines Section */}
      <div className="flex flex-col items-center justify-center p-4 sm:p-6 w-full sm:w-3/4 lg:w-2/3">
        <h3 className="text-2xl text-blue-600 sm:text-3xl font-bold mb-3 text-center">
          Paper Formatting Guidelines
        </h3>
        <div className="p-4 sm:p-5 rounded-lg w-full">
          <ul className="list-decimal text-justify sm:text-lg pl-5 text-gray-900 space-y-2">
            <li>
              Paper Length: Maximum of 6 pages, including figures, tables, and
              references. Two additional pages are permitted with a charge of ₹
              1000 per page (Indian authors) or $50 per page (International
              authors).
            </li>

            <li>
              Use the IEEE template provided via the link below for paper
              formatting.
            </li>
            <ul className="ml-5">
              <li>1. MS Word Template</li>
              <li className=" list-disc ml-10">A4</li>
              <li>2. LaTeX Template</li>
              <li className=" list-disc ml-10">
                LaTeX Template Instructions [Be sure to use the template's
                conference mode.]
              </li>
              <li className=" list-disc ml-10">Template</li>
              <li className=" list-disc ml-10">LaTeX Bibliography Files</li>
            </ul>
          </ul>
        </div>
      </div>

      {/* General Instructions Section */}
      <div className="flex flex-col items-center text-justify p-4 sm:p-6 bg-gray-100 rounded-lg w-full sm:w-3/4 lg:w-2/3">
        <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-center text-blue-600">
          General Instructions
        </h3>
        <div className="p-4 sm:p-5 rounded-lg w-full">
          <ul className="list-decimal text-base sm:text-lg pl-5 space-y-2 text-gray-800 leading-relaxed">
            <li>All submissions must be made via Microsoft CMT.</li>
            <li>
              Papers should strictly adhere to the IEEE, papers violating
              formatting guidelines may be rejected.
            </li>
            <li>
              Submissions must be original, unpublished work not under review
              elsewhere.
            </li>
            <li>
              Simultaneous submissions to other conferences or journals are
              prohibited.
            </li>
            <li>All manuscripts must be written in English.</li>
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
            <li>
              At least one author for each accepted paper must register and
              present their accepted paper in the conference for consideration
              of publication on IEEE Xplore.
            </li>
            <li>
              In case of more than one paper submissions by author (s), each
              accepted paper needs to be registered separately.
            </li>
            <li>
              The conference is scheduled to be conducted in hybrid mode from
              12th-13th February, 2026.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center text-justify p-4 sm:p-6 bg-gray-100 rounded-lg w-full sm:w-3/4 lg:w-2/3">
        <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-center text-blue-600">
          Policy on Plagiarism
        </h3>
        <div className="p-4 sm:p-5 rounded-lg w-full">
          <ul className="list-decimal text-base sm:text-lg pl-5 space-y-2 text-gray-800 leading-relaxed">
            <li>Authors must avoid plagiarism in any form.</li>
            <li>
              Submissions should be original, unpublished research and not under
              review elsewhere.
            </li>
            <li>
              Papers found to be plagiarized at any stage of the review will be
              rejected.
            </li>
            <li>
              Authors are collectively and individually responsible for the
              content of their published manuscripts, as per the copyright
              transfer agreement.
            </li>
            <li>
              It is the responsibility of each author to maintain the highest
              ethical standards regarding plagiarism.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Guideline;
