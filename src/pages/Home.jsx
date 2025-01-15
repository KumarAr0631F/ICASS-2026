import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Full-width Image */}
      <img
        src={assets.mru_poster}
        alt="Home Background"
        className="w-full h-auto"
      />

      {/* Scrolling Text */}
      <div className="bg-red-600 text-white w-full">
        <marquee
          behavior="scroll"
          direction="left"
          className="py-2 text-center flex text-sm md:text-lg"
        >
          Submission Date:- 30th November, 2025
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Notification of Acceptance:- 10th January, 2026
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Camera Ready/Final Submission Paper:- 25th January, 2026
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Early Bird Registration:- 28th January, 2026
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Conference Date:- 12th - 13th February, 2026
        </marquee>
      </div>

      {/* Content Wrapper */}
      <div className="w-full max-w-6xl px-4 md:px-8 lg:px-12 py-8">
        {/* About Conference */}
        <div className="mb-12">
          <h3 className="text-blue-700 text-2xl md:text-3xl font-bold">
            About Conference
          </h3>
          <hr className="bg-blue-700 border h-1 w-full my-2" />
          <p className="text-base md:text-lg text-gray-700 text-justify">
            The{" "}
            <b>
              International Conference on Intelligent Computing and Automation
              for Sustainable Solutions (ICASS-2026)
            </b>{" "}
            is a prestigious platform that brings together researchers,
            academicians, industry experts, and practitioners to discuss and
            share advancements in the fields of intelligent computing,
            automation, and sustainable technologies. The primary focus of the
            conference is to address the growing need for innovative solutions
            that integrate cutting-edge technology with sustainability
            principles to address global challenges.
          </p>
        </div>
        {/* About Manav Rachna University */}
        <div className="mb-12">
          <h3 className="text-blue-700 text-2xl md:text-3xl font-bold">
            About Manav Rachna University
          </h3>
          <hr className="bg-blue-700 border h-1 w-full my-2" />
          <p className="text-base md:text-lg text-gray-700 text-justify">
            Manav Rachna University (MRU){" "}
            <NavLink
              className={"text-blue-700 cursor-pointer"}
              to={"http://mru.edu.in"}
            >
              (http://mru.edu.in)
            </NavLink>{" "}
            is a leader in educational excellence providing high-quality
            education with an environment of academic rigor and innovation. The
            university offers UG/PG/Doctoral programmes in various disciplines
            including engineering, management, law, applied sciences, education
            and humanities etc. It has recently received the prestigious NAAC
            Grade A accreditation in June 2024 and Platinum band in the
            Outcome-Based Education Rankings 2024. Additionally, the university
            has been recognized in the Diamond band category under the
            Sustainable Institutions of India Green Rankings 2024, underscoring
            the commitment to sustainability and environmental stewardship. With
            its striving vision and distinctive methodology, the university has
            received QS I Gauge Overall Diamond rating, with a Platinum rating
            in Academic Development & Employability and a Diamond rating in
            Teaching Learning Process, Faculty Quality, Facilities and Social
            Responsibility. MRU has also been ranked 5th in Delhi NCR & 20th in
            North India under Private & Deemed Multidisciplinary Universities
            category also ranked 13th nationally and 9th in North India among
            Emerging Multidisciplinary Universities in the prestigious THE
            WEEK 2024 rankings.
          </p>
        </div>

        {/* Conference Topics */}
        <div className="mb-12">
          <h3 className="text-blue-700 text-2xl md:text-3xl font-bold">
            Conference Tracks (Not Limited to)
          </h3>
          <hr className="bg-blue-700 border h-1 w-full my-2" />
          <p className="text-lg lg:text-xl text-justify mb-6">
        The conference <strong>ICASS-2026</strong> aims to foster on the theme
        <em>“Harnessing AI for a Digital Future”</em>, by leveraging intelligent
        computing, automation, and sustainable solutions for securing a digital
        future for everyone. The conference will feature the following tracks
        and related topics (but not limited to):
      </p>

      <ul className="list-disc list-inside space-y-4 text-lg lg:text-xl">
        <li>
          <strong>Track-1:</strong> Computational Intelligent Systems and
          Applications
        </li>
        <li>
          <strong>Track-2:</strong> Data Analytics and Decision Sciences
        </li> 
        <li>
          <strong>Track-3:</strong> Futuristic Tools, Technologies & Applications
        </li>
        <li>
          <strong>Track-4:</strong> Smart Electronics and Next-Gen Communication
        </li>
        <li>
          <strong>Track-5:</strong> Smart Cities & Sustainability
        </li>
        <li>
          <strong>Track-6:</strong> Industry 5.0 and Cyber Physical Systems
        </li>
        <li>
          <strong>Track-7:</strong> Smart Materials for Sustainable Technology
        </li>
      </ul>
        </div>

        {/* Key Highlights */}
        <div>
          <h3 className="text-blue-700 text-2xl md:text-3xl font-bold">
            Key Highlights
          </h3>
          <hr className="bg-blue-700 border h-1 w-full my-2" />
          <p className="text-base md:text-lg text-gray-700 text-justify">
            <b>• Promote Research and Innovation:</b> To foster the exchange of
            ideas and promote research in intelligent computing and automation
            with an emphasis on sustainable practices.
          </p>
          <p className="text-base md:text-lg text-gray-700 text-justify">
            <b>• Encourage Collaboration:</b> To create opportunities for
            collaboration among researchers, industries, and policymakers to
            design eco-friendly and efficient systems.
          </p>
          <p className="text-base md:text-lg text-gray-700 text-justify">
            <b>• Showcase Emerging Technologies:</b> To provide a platform for
            presenting breakthroughs in intelligent computing and automation
            that contribute to sustainable development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
