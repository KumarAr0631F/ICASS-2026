import React from "react";
import manavRachnaBg from "../assets/manav_rachna.png";


const SpecialSession = () => {
  return (
    <div>
      <div className="min-h-screen w-full flex flex-col items-center justify-center relative">
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: `url(${manavRachnaBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.5) blur(0px)",
          }}
        />
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            ICASS-2026
          </h1>
          <div className="text-lg md:text-xl font-semibold text-white mb-2">
            Date : February 12 - 13, 2026
          </div>
          <div className="text-lg md:text-xl font-semibold text-white mb-8">
            Faridabad, Haryana, India
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            CALL FOR SPECIAL SESSION
          </h2>
        </div>
      </div>
      <div className="w-full flex mt-8">
        <div className=" w-full px-4  text-gray-900 mb-8">
          <p>
            Kindly submit proposal for conducting special session in the prescribed format <a
              href="Revised_Call_for_Papers_Special_Session_ICASS_2026.docx"
              download={
                "Revised_Call_for_Papers_Special_Session_ICASS_2026.docx"
              }
              className="text-blue-600 cursor-pointer"
            >
              (format link)
            </a>{" "} to <a className="text-blue-600 cursor-pointer" href="mailto:icass2026@mru.edu.in">icass2026@mru.edu.in</a> mentioning the subject as “Proposal for Special Track on [Title of your special track]”
          {" "}
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center mt-2 mb-8">
        <div className="text-center">
          <p className="text-red-600 font-semibold">
            Special Session Proposal Submission: 5th October, 2025
          </p>
          <p className="text-red-600 font-semibold">
            Special Session Proposal Acceptance: 10th October, 2025
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center mb-2">
        <div className=" bg-opacity-80 rounded-lg px-6 py-4 w-full">
          <ul className="list-disc list-inside text-gray-800">
            <li className="mb-2">
              For Paper Submission Dates and Registration guidelines, please
              visit{" "}
              <a
                href="/registration"
                className="text-blue-600 underline hover:text-blue-800"
              >
                registration page.
              </a>
            </li>

            <li>
              For Author Guidelines, please visit{" "}
              <a
                href="/callforpapers/guidelines"
                className="text-blue-600 underline hover:text-blue-800"
              >
                author guidelines page.
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p className="text-3xl font-semibold text-blue-600 text-center mb-4">
          Proposal Submission Process
        </p>
        <ul className="list-disc list-inside text-gray-800 w-full px-4 mb-8">
          <li>
            Kindly submit this proposal to icass2026@mru.edu.in mentioning the
            subject as “Proposal for Special Track on [Title of your special
            track]”
          </li>
          <li>
            All the proposals will be carefully reviewed by the conference TPC committee and will be critically analysed before final selection.
          </li>
        </ul>
      </div>

      <div className="mb-8 ml-5">
        <p className="text-3xl font-semibold text-blue-600 text-center mb-4">
          Paper Submission Process
        </p>
        <p>
          All papers must be submitted through conference Microsoft CMT portal
          using the following link{" "}
          <a
            href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICASS2026%2F"
            className="text-blue-600 underline hover:text-blue-800 cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICASS2026%2F
          </a>
        </p>
      </div>

      <div>
        <p className="text-3xl font-semibold text-blue-600 text-center mb-4">
          Guidelines For the Track Chair 
        </p>
        <ul className="list-decimal list-inside text-gray-800 w-full px-4 mb-8">
          <li>Proposed track must align with the scope of ICASS 2026.</li>
          <li>Maximum 2 track chairs for one single special track are allowed.</li>
          <li>All papers must be submitted through the conference CMT portal.</li>
          <li>A minimum of 50 paper submissions is mandatory to qualify for track-related benefits.</li>
          <li>A Track Chair may submit up to 2 papers as an author in their own track.</li>
          <li>A single author may have a maximum of 3 accepted papers.</li>
          <li>Each paper will be reviewed by at least three reviewers.</li>
          <li>Track Chairs must provide a list of 50 reviewers in Excel format, including: Name, Email ID, Phone Number, Affiliation, CMT ID.</li>
          <li>Session chairs have the responsibility of disseminating call for papers</li>
          <li>For conducting special session, there must be at least minimum 40 submissions with at-least 8 registered papers (i.e registration fee paid for atleast one author) in the session.</li>
        </ul>
      </div>

      <div>
        <p className="text-3xl font-semibold text-blue-600 text-center mb-4">
          Benefits to Track Chairs
        </p>
        <ul className="list-disc list-inside text-gray-800 w-full px-4 mb-8">
          <li>Conference Kit (on attending in person)</li>
          <li>Honorarium (including TA) according to conference norms.</li>
          <li>Local hospitality (if attending physically)</li>
          <li>One paper registration fee waived</li>
        </ul>
      </div>
    </div>
  );
};

export default SpecialSession;
