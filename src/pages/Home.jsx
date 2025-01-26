import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [openTrackOne, setOpenTrackOne] = useState(false);
  const [openTrackTwo, setOpenTrackTwo] = useState(false);
  const [openTrackThree, setOpenTrackThree] = useState(false);
  const [openTrackFour, setOpenTrackFour] = useState(false);
  const [openTrackFive, setOpenTrackFive] = useState(false);
  const [openTrackSix, setOpenTrackSix] = useState(false);
  const [openTrackSeven, setOpenTrackSeven] = useState(false);
  const toggleTrackOne = () => {
    setOpenTrackOne(!openTrackOne);
  };
  const toggleTrackTwo = () => {
    setOpenTrackTwo(!openTrackTwo);
  };
  const toggleTrackThree = () => {
    setOpenTrackThree(!openTrackThree);
  };
  const toggleTrackFour = () => {
    setOpenTrackFour(!openTrackFour);
  };
  const toggleTrackFive = () => {
    setOpenTrackFive(!openTrackFive);
  };
  const toggleTrackSix = () => {
    setOpenTrackSix(!openTrackSix);
  };
  const toggleTrackSeven = () => {
    setOpenTrackSeven(!openTrackSeven);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Full-width Image */}

      <img
        src={assets.mru_poster}
        alt="Home Background"
        className="w-[60rem] h-auto"
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
          Camera Ready/Final Paper Submission:- 25th January, 2026
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Early Bird Registration:- 28th January, 2026
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Conference Date:- 12th - 13th February, 2026
        </marquee>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-x-4 items-center sm:hidden">
        <img className="w-[16em] h-auto" src={assets.mru_logo} alt="MRU Logo" />
        <img className="w-[16em] h-auto" src={assets.mru_soe} alt="MRU SOE" />
        <img className="w-[16em] h-auto" src={assets.mru} alt="MRU" />
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
            The conference <strong>ICASS-2026</strong> aims to foster on the
            theme
            <b>
              <em>“Harnessing AI for a Digital Future”</em>
            </b>
            , by leveraging intelligent computing, automation, and sustainable
            solutions for securing a digital future for everyone. The conference
            will feature the following tracks and related topics (but not
            limited to):
          </p>

          <ul className=" list-inside space-y-4 text-lg lg:text-xl">
            <li
              className="text-xl cursor-pointer bg-blue-200 py-3 px-2.5 rounded-lg"
              onClick={toggleTrackOne}
            >
              <strong>Track-1:</strong> Computational Intelligent Systems and
              Applications
            </li>
            {openTrackOne && (
              <ul className="list-inside ml-5">
                <li className="list-disc">
                  AI, Machine Learning & its Applications
                </li>
                <li className="list-disc">Human-Computer Interaction</li>
                <li className="list-disc">
                  Computer Vision and Image Processing
                </li>
                <li className="list-disc">
                  Natural Language Processing, Understanding & Generation
                </li>
                <li className="list-disc">
                  Cognitive and Computational Neuroscience
                </li>
                <li className="list-disc">
                  Soft Computing Techniques in Decision-Making
                </li>
                <li className="list-disc">
                  Applications of Fuzzy Systems in Industry and Research
                </li>
                <li className="list-disc">
                  Cloud Computing and IoT in Manufacturing
                </li>
                <li className="list-disc">
                  Privacy-Preserving Computation and Data Handling
                </li>
                <li className="list-disc">
                  Intelligent Optimization Techniques
                </li>
                <li className="list-disc">Nature-Inspired Algorithms</li>
                <li className="list-disc">
                  Security and Privacy in Intelligent Systems
                </li>
              </ul>
            )}

            <li
              className="text-xl cursor-pointer bg-blue-200 py-3 px-2.5 rounded-lg "
              onClick={toggleTrackTwo}
            >
              <strong>Track-2:</strong> Data Analytics and Decision Sciences
            </li>
            {openTrackTwo && (
              <ul className="list-inside ml-5">
                <li className="list-disc">
                  Data Analytics and Big Data Technologies with Applications
                </li>
                <li className="list-disc">
                  AI-Driven Decision Support Systems{" "}
                </li>
                <li className="list-disc">
                  Predictive and Prescriptive Analytics
                </li>
                <li className="list-disc">Data Engineering and Management</li>
                <li className="list-disc">
                  Computational Complexity in Decision-Making Models
                </li>
                <li className="list-disc">Human-Centric Data Science</li>
                <li className="list-disc">
                  Decision and Statistical Inference
                </li>
                <li className="list-disc">
                  Cognitive and Behavioral Aspects of Data Interpretation
                </li>
                <li className="list-disc">Data Integrity and Security</li>
                <li className="list-disc">
                  Business Intelligence and Data Mining
                </li>
              </ul>
            )}
            <li
              className="text-xl cursor-pointer bg-blue-200 py-3 px-2.5 rounded-lg"
              onClick={toggleTrackThree}
            >
              <strong>Track-3:</strong> Futuristic Tools, Technologies &
              Applications
            </li>
            {openTrackThree && (
              <ul className="list-inside ml-5">
                <li className="list-disc">
                  Computational Mechanics and Simulations
                </li>
                <li className="list-disc">
                  Artificial Intelligence and Machine Learning in Mechanical
                  Systems
                </li>
                <li className="list-disc">Generative AI and LLMs</li>
                <li className="list-disc">Edge and Fog Computing</li>
                <li className="list-disc">Autonomic Computing</li>
                <li className="list-disc">AR/VR Technology</li>
                <li className="list-disc">Hybrid Intelligent Systems</li>
                <li className="list-disc">Bio-Inspired Engineering</li>
                <li className="list-disc">AI & Emotions</li>
                <li className="list-disc">Quantum Computing</li>
                <li className="list-disc">DNA Computing</li>
                <li className="list-disc">Blockchain Systems</li>
              </ul>
            )}
            <li
              className="text-xl cursor-pointer bg-blue-200 py-3 px-2.5 rounded-lg"
              onClick={toggleTrackFour}
            >
              <strong>Track-4:</strong> Smart Electronics and Next-Gen
              Communication
            </li>
            {openTrackFour && (
              <ul className="list-inside ml-5">
                <li className="list-disc">5G and 6G Technology</li>
                <li className="list-disc">
                  Electronic Devices, Circuits, and Systems
                </li>
                <li className="list-disc">
                  Renewable Energy Sources and Technology including hydrogen.
                </li>
                <li className="list-disc">
                  RF, Microwaves, Wireless and Optical Communication
                </li>
                <li className="list-disc">VLSI and Low Power Electronics</li>
                <li className="list-disc">Biosensors</li>
                <li className="list-disc">
                  Robotics, Control, Automation and Instrumentation
                </li>
                <li className="list-disc">
                  Power Electronics and Applications
                </li>
                <li className="list-disc">
                  Power Generation, Transmission and Distribution
                </li>
                <li className="list-disc">
                  Solar, Wind, and Battery Technology
                </li>
                <li className="list-disc">Biomedical Electronics</li>
                <li className="list-disc">Photonic Technologies</li>
              </ul>
            )}
            <li
              className="text-xl cursor-pointer bg-blue-200 py-3 px-2.5 rounded-lg"
              onClick={toggleTrackFive}
            >
              <strong>Track-5:</strong> Smart Cities and Sustainability
            </li>
            {openTrackFive && (
              <ul className="list-inside ml-5">
                <li className="list-disc">Smart Energy Efficient Systems</li>
                <li className="list-disc">
                  Sustainable Manufacturing Practices
                </li>
                <li className="list-disc">
                  Smart Grids and Green Energy Systems
                </li>
                <li className="list-disc">Smart Internet of Things</li>
                <li className="list-disc">
                  Energy Efficiency in Mechanical Systems
                </li>
                <li className="list-disc">Renewable Energy Systems</li>
                <li className="list-disc">
                  Sustainable Transportation and Mobility
                </li>
                <li className="list-disc">Smart Waste Management Systems</li>
              </ul>
            )}
            <li
              className="text-xl cursor-pointer bg-blue-200 py-3 px-2.5 rounded-lg"
              onClick={toggleTrackSix}
            >
              <strong>Track-6:</strong> Industry 5.0 and Cyber Physical Systems
            </li>
            {openTrackSix && (
              <ul className="list-inside ml-5">
                <li className="list-disc">Advanced Robotics and Automation</li>
                <li className="list-disc">
                  Additive Manufacturing and 3D Printing
                </li>
                <li className="list-disc">Smart Sensors and Actuators</li>
                <li className="list-disc">Smart Buildings</li>
                <li className="list-disc">
                  Digital Manufacturing and Smart Factories
                </li>
                <li className="list-disc">Human-Machine Interaction</li>
                <li className="list-disc">Autonomous vehicles</li>
                <li className="list-disc">Smart Healthcare</li>
              </ul>
            )}
            <li
              className="text-xl cursor-pointer bg-blue-200 py-3 px-2.5 rounded-lg"
              onClick={toggleTrackSeven}
            >
              <strong>Track-7:</strong> Smart Materials for Sustainable
              Technology
            </li>
            {openTrackSeven && (
              <ul className="list-inside ml-5">
                <li className="list-disc">Eco-friendly Smart Materials</li>
                <li className="list-disc">
                  Recyclable and Reusable Smart Materials
                </li>
                <li className="list-disc">
                  Smart Materials for Energy Applications
                </li>
                <li className="list-disc">
                  Green Synthesis of Smart Materials
                </li>
                <li className="list-disc">
                  Solid State and Thin-film Batteries
                </li>
                <li className="list-disc">
                  Smart Materials for Sensors and Related Technology
                </li>
                <li className="list-disc">
                  Applications of AI for Sustainable Technology
                </li>
                <li className="list-disc">
                  Artificial Intelligence and Materials Innovation
                </li>
                <li className="list-disc">Energy Storage and Sustainability</li>
                <li className="list-disc">
                  AI for Materials Synthesis & Discovery
                </li>
                <li className="list-disc">
                  AI for batteries, supercapacitors, and other energy devices
                </li>
                <li className="list-disc">
                  Smart materials & AI for data storage
                </li>
              </ul>
            )}
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
        <div className="mt-5">
          <h3 className="text-blue-700 text-2xl md:text-3xl font-bold">
            Our Sponsors
          </h3>
          <hr className="bg-blue-700 border h-1 w-full my-2" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <img
              className="w-[15rem] h-auto"
              src={assets.sponsor_logo_1}
              alt=""
            />
            <img
              className="w-[15rem] h-auto"
              src={assets.sponsor_logo_1}
              alt=""
            />
            <img
              className="w-[15rem] h-auto"
              src={assets.sponsor_logo_1}
              alt=""
            />
            <img
              className="w-[15rem] h-auto"
              src={assets.sponsor_logo_1}
              alt=""
            />
            <img
              className="w-[15rem] h-auto"
              src={assets.sponsor_logo_1}
              alt=""
            />
            <img
              className="w-[15rem] h-auto"
              src={assets.sponsor_logo_1}
              alt=""
            />
            <img
              className="w-[15rem] h-auto"
              src={assets.sponsor_logo_1}
              alt=""
            />
            <img
              className="w-[15rem] h-auto"
              src={assets.sponsor_logo_1}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
