import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import "./Home.css";
import AutoSlidingCarousel from "./AutoSlidingCarousel";
import TracksDropdown from "./TracksDropdown";

const Home = () => {
  const [showSupporters, setShowSupporters] = useState(false);
  const [supporterDropdownState, setSupporterDropdownState] = useState('closed'); // 'open', 'opening', 'closing', 'closed'
  const handlClickk = () => {
    Navigate("/contact");
  };

  return (
    <>
      <AutoSlidingCarousel />
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        {/* Full-width Image */}

        {/* Scrolling Text */}
        <div className="bg-red-600 text-white w-full">
          <marquee
            behavior="scroll"
            direction="left"
            className="py-1 text-center flex text-sm md:text-lg"
          >
            Full Paper Submission Deadline:- 30th October, 2025
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Notification of Acceptance:- 30th November, 2025
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Registration Deadline:- 15th December, 2025
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Camera Ready Submission Deadline:- 30th December, 2025
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Conference Date:- 12th - 13th February, 2026
          </marquee>
        </div>

        {/* <div className=" flex items-center justify-center mt-5 text-center bg-gray-100">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">International Conference</h1>
          <p className="text-2xl">On</p>
          <p className="text-2xl font-semibold">
            Intelligent Computing and Automation for Sustainable Solutions
          </p>
          <p className="text-2xl text-red-500 font-semibold">
            February 12<sup>th</sup> - 13<sup>th</sup>, 2026
          </p>
          <p className="text-2xl">Organised by</p>
          <p className="text-2xl font-medium">
            School of Engineering
          </p>
          <p className="text-2xl">
            Manav Rachna University, Faridabad, Haryana, India
          </p>
        </div>
      </div> */}

        {/* Content Wrapper */}
        <div className="w-full max-w-6xl px-4 md:px-8 lg:px-12 py-8">
          {/* About Conference */}
          <div className="mb-8">
            <h3 className="text-blue-700 text-2xl md:text-3xl font-bold">
              About ICASS-2026
            </h3>
            <hr className="bg-blue-700 border h-1 w-full my-2" />
            <p className="text-base md:text-lg text-gray-700 text-justify">
              The{" "}
              <b>
                1st International Conference on Intelligent Computing and
                Automation for Sustainable Solutions (ICASS-2026)
              </b>{" "}
              is a prestigious platform that will bring together researchers,
              academicians, industry experts, and practitioners to discuss and
              share advancements in the fields of intelligent computing,
              automation, and sustainable technologies. Themed at “Harnessing AI
              for a Digital Future”, the conference is envisioned as a premier
              platform to deliberate on the transformative role of intelligent
              computing and automation in building a sustainable and
              technology-driven world. The conference is aimed at addressing the
              growing need for innovative solutions that integrate cutting-edge
              technology with sustainability principles to address global
              challenges. The conference is scheduled to be conducted in hybrid
              mode from 12th-13th February, 2026.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-blue-700 text-2xl md:text-3xl font-bold">
              Scope of ICASS-2026
            </h3>
            <hr className="bg-blue-700 border h-1 w-full my-2" />
            <p className="text-base md:text-lg text-gray-700 text-justify">
              The scope of ICASS-2026 encompasses a broad range of
              interdisciplinary domains that integrate intelligent computing and
              automation with sustainable practices. Key focus areas include
              (but not limited to) artificial intelligence, machine learning,
              deep learning, data science, robotics, Internet of Things (IoT),
              cyber-physical systems, green computing, energy-efficient
              architectures, smart materials, next gen communication etc. to
              address the challenges of sustainable industrial development.
              ICASS-2026 highlights the role of intelligent technologies in
              domains such as smart cities, healthcare, agriculture, education,
              industry, and environmental monitoring etc. where
              technology-driven solutions are vital for achieving long-term
              sustainability and societal well-being.
            </p>
          </div>
          {/* About Manav Rachna University */}
          <div className="mb-8">
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
                (http://manavrachna.edu.in)
              </NavLink>{" "}
              was established under the Haryana State Legislature Act No. 26 of
              2014 and is one of the leading private state universities in
              Haryana, India. It is recognized by the University Grants
              Commission (UGC) under Section 2(f) of the UGC Act, 1956, and is
              dedicated to providing world-class education with a global
              outlook. The university has been awarded an “A” grade by NAAC
              (2024–2029), and its B.Tech Computer Science & Engineering program
              has received NBA accreditation (2023–2026). In a landmark
              achievement, MRU became the first university in India to be
              accredited by the International Baccalaureate (IB), underscoring
              its alignment with international educational standards. It has
              also earned prestigious recognitions from QS I-Gauge, including
              the Platinum Badge in Engineering Subject Ratings (2025–2027), the
              Overall Diamond Rating in University Rankings (2025–2028), the
              Platinum band in Outcome-Based Education (OBE) consecutively for
              2024 & 2025, the QS Institution of Happiness Award (2024), and the
              Great Place to Work recognition for 2025–26. These accomplishments
              reflect MRU’s commitment to academic rigor, innovation, and
              student welfare. MRU comprises five schools and eight departments,
              offering a diverse range of undergraduate, postgraduate, and Ph.D.
              programs in fields such as Engineering, Management & Commerce,
              Law, Education & Humanities, and Sciences. All programs are
              approved by statutory bodies like AICTE, NCTE, and BCI, ensuring
              that academic and professional standards are maintained at the
              highest levels. The university’s ethos is built on five core
              values—Student Centricity, Integrity, Excellence, Inclusivity, and
              Sustainability. These principles guide its academic environment
              and encourage ethical conduct, equal opportunity, and continuous
              learning. By fostering innovation, research, and holistic
              development, MRU empowers its students to become skilled
              professionals and responsible global citizens committed to making
              a positive impact on society.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-blue-700 text-2xl md:text-3xl font-bold">
              About School of Engineering
            </h3>
            <hr className="bg-blue-700 border h-1 w-full my-2" />
            <p className="text-base md:text-lg text-gray-700 text-justify">
              The School of Engineering at Manav Rachna University is a
              distinguished center of excellence committed to delivering
              high-quality engineering education. It offers a comprehensive
              range of undergraduate, postgraduate, and Ph.D. programs across
              disciplines such as Computer Science Engineering, AIML, Cyber
              Security, GenAI, Full Stack Development, Mechanical Engineering,
              Smart Manufacturing & Automation, Electric Vehicle Technology,
              Electronics & Communication Engineering, and VLSI & Chip Design.
              The school is supported by state-of-the-art infrastructure,
              including advanced laboratories, research facilities, and the
              latest technological tools. The school has collaborations with
              leading industry and academic partners such as Google Cloud,
              Xebia, CISCO, KPMG, L&T Edutech, and Truechip, enriching learning
              experiences and providing students with real-world exposure.
              Additionally, it houses a specialized Drone Lab in association
              with AVPL, offering cutting-edge research and innovation
              opportunities in emerging technologies. With a strong focus on
              innovation, practical problem-solving, and skill enhancement, the
              school nurtures an entrepreneurial mindset, encouraging students
              to think creatively and apply their engineering knowledge for
              societal benefit. Its commitment to academic excellence is
              reflected in numerous accolades and accreditations, including QS
              I-Gauge 2025 subject ratings for Engineering and NBA
              certification, which stand as benchmarks of superior
              technical education.
            </p>
          </div>

          {/* Conference Topics */}
          <div className="mb-8">
            <h3 className="text-blue-700 text-2xl font-bold">
              Conference Tracks
            </h3>
            <hr className="bg-blue-700 border h-1 w-full my-2" />
            <p className="text-justify mb-6">
              The conference <strong>ICASS-2026</strong> aims to foster on the
              theme
              <b>
                <em>“Harnessing AI for a Digital Future”</em>
              </b>
              , by leveraging intelligent computing, automation, and sustainable
              solutions for securing a digital future for everyone. The
              conference will feature the following tracks and related topics
              (but not limited to):
            </p>

            <TracksDropdown />
          </div>

          {/* Key Highlights */}
          <div>
            <h3 className="text-blue-700 text-2xl md:text-3xl font-bold">
              Key Highlights
            </h3>
            <hr className="bg-blue-700 border h-1 w-full my-2" />
            <p className="text-base md:text-lg text-gray-700 text-justify">
              <b>• Promote Research and Innovation:</b> To foster the exchange
              of ideas and promote research in intelligent computing and
              automation with an emphasis on sustainable practices.
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
          {/* <div className="mt-5">
            <h1 className="text-blue-700 text-2xl md:text-3xl font-bold">
              Publication Opportunity
            </h1>
            <hr className="bg-blue-700 border h-1 w-full my-2" />
            <p className="text-justify">
              Accepted and presented papers will be submitted for inclusion into
              IEEE Xplore subject to meeting IEEE Xplore’s scope and quality
              requirements. Extended version of the selected papers will be
              submitted for publication in various SCOPUS indexed journals (with
              additional cost).
            </p>
          </div> */}
          <div className="mt-5">
            <h3 className="text-blue-700 text-2xl md:text-3xl font-bold flex items-center justify-between cursor-pointer" onClick={() => {
              if (supporterDropdownState === 'open') {
                setSupporterDropdownState('closing');
                setTimeout(() => setSupporterDropdownState('closed'), 500);
              } else if (supporterDropdownState === 'closed') {
                setSupporterDropdownState('opening');
                setTimeout(() => setSupporterDropdownState('open'), 500);
              }
            }}>
              Financial Supporters
              <ChevronDown className={`ml-2 transition-transform duration-300 ${supporterDropdownState === 'open' || supporterDropdownState === 'opening' ? 'rotate-180' : ''}`} size={28} />
            </h3>
            <hr className="bg-blue-700 border h-1 w-full my-2" />
            <div className={`overflow-hidden ${supporterDropdownState === 'open' ? 'animate-dropdown-open' : supporterDropdownState === 'opening' ? 'animate-dropdown-open' : supporterDropdownState === 'closing' ? 'animate-dropdown-close' : ''}`}> 
              {(supporterDropdownState === 'open' || supporterDropdownState === 'opening' || supporterDropdownState === 'closing') && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
                  <div className="flex items-center justify-center text-center">
                    <img className="w-40 h-auto" src={assets.sponsor_logo_2} alt="" />
                  </div>
                  <img className="w-40 h-auto items-center object-contain sm:object-cover sm:w-[15rem] sm:h-[15rem]" src={assets.sponsor_logo_3} alt="" />
                </div>
              )}
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-blue-700 text-2xl md:text-3xl font-bold">
              Knowledge Partners
            </h3>
            <hr className="bg-blue-700 border h-1 w-full my-2" />
            <div className="w-full overflow-x-auto whitespace-nowrap flex gap-8 py-2">
              <marquee behavior="scroll" direction="left">
                <img
                  src={assets.sponsor_logo_4}
                  className="w-40 h-auto inline-block"
                  alt=""
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img
                  src={assets.sponsor_logo_5}
                  className="w-40 h-auto inline-block"
                  alt=""
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img
                  src={assets.sponsor_logo_6}
                  className="w-40 h-auto inline-block"
                  alt=""
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img
                  src={assets.sponsor_logo_7}
                  className="w-40 h-auto inline-block"
                  alt=""
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img
                  src={assets.sponsor_logo_8}
                  className="w-40 h-auto inline-block"
                  alt=""
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img
                  src={assets.sponsor_logo_9}
                  className="w-40 h-auto inline-block"
                  alt=""
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img
                  src={assets.sponsor_logo_10}
                  className="w-40 h-auto inline-block"
                  alt=""
                />
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
