import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Home.css";
import AutoSlidingCarousel from "./AutoSlidingCarousel";

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

  const handlClickk = () => {
    Navigate("/contact");
  };

  return (
    <>
      <AutoSlidingCarousel />
      <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        {/* Full-width Image */}

        {/* Scrolling Text */}
        <div className="bg-red-600 text-white w-full">
          <marquee
            behavior="scroll"
            direction="left"
            className="py-1 text-center flex text-sm md:text-lg"
          >
            Full Paper Submission Deadline:- 30th August, 2025
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Notification of Acceptance:- 30th October, 2025
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Registration Deadline:- 10th November, 2025
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Camera Ready Submission Deadline:- 30th November, 2025
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
          <div className="mb-12">
            <h3 className="text-blue-700 text-2xl md:text-3xl font-bold">
              About ICASS-2026
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
              principles to address global challenges. The conference is scheduled to be conducted in hybrid mode from 12th-13th February, 2026(Conference proposal is submitted to IEEE Delhi Section).
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
                (http://manavrachna.edu.in)
              </NavLink>{" "}
              is a leader in educational excellence providing high-quality
              education with an environment of academic rigor and innovation.
              The university offers UG/PG/Doctoral programmes in various
              disciplines including engineering, management, law, applied
              sciences, education and humanities etc. It has recently received
              the prestigious NAAC Grade A accreditation in June 2024 and
              Platinum band in the Outcome-Based Education Rankings 2024.
              Additionally, the university has been recognized in the Diamond
              band category under the Sustainable Institutions of India Green
              Rankings 2024, underscoring the commitment to sustainability and
              environmental stewardship. With its striving vision and
              distinctive methodology, the university has received QS I Gauge
              Overall Diamond rating, with a Platinum rating in Academic
              Development & Employability and a Diamond rating in Teaching
              Learning Process, Faculty Quality, Facilities and Social
              Responsibility. MRU has also been ranked 5th in Delhi NCR & 20th
              in North India under Private & Deemed Multidisciplinary
              Universities category also ranked 13th nationally and 9th in North
              India among Emerging Multidisciplinary Universities in the
              prestigious THE WEEK 2024 rankings.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-blue-700 text-2xl md:text-3xl font-bold">
              About School of Engineering
            </h3>
            <hr className="bg-blue-700 border h-1 w-full my-2" />
            <p className="text-base md:text-lg text-gray-700 text-justify">
              The School of Engineering at Manav Rachna University is a premier
              institution dedicated to providing top-tier engineering education.
              It offers a wide array of undergraduate, postgraduate and PhD
              programs, focusing on a blend of theoretical knowledge and
              practical application. The school is equipped with
              state-of-the-art infrastructure, including modern laboratories,
              advanced research facilities, and cutting-edge technology. The
              school places a strong emphasis on innovation, problem-solving,
              and skill development, and fosters a culture of entrepreneurship,
              encouraging students to think creatively and contribute to society
              through their engineering expertise. The school has won various
              awards and accreditations such as QS I-Gauge 2025 subject ratings
              for Engineering, NBA etc. which is the hallmark of the quality
              technical education.
            </p>
          </div>

          {/* Conference Topics */}
          <div className="mb-12">
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

            <ul className=" list-inside space-y-4">
              <li
                className="cursor-pointer bg-blue-200 py-3 px-2.5 rounded-lg"
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
                className="cursor-pointer bg-blue-200 py-3 px-2.5 rounded-lg "
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
                className=" cursor-pointer bg-blue-200 py-3 px-2.5 rounded-lg"
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
                className=" cursor-pointer bg-blue-200 py-3 px-2.5 rounded-lg"
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
                className="cursor-pointer bg-blue-200 py-3 px-2.5 rounded-lg"
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
                className="cursor-pointer bg-blue-200 py-3 px-2.5 rounded-lg"
                onClick={toggleTrackSix}
              >
                <strong>Track-6:</strong> Industry 5.0 and Cyber Physical
                Systems
              </li>
              {openTrackSix && (
                <ul className="list-inside ml-5">
                  <li className="list-disc">
                    Advanced Robotics and Automation
                  </li>
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
                className="cursor-pointer bg-blue-200 py-3 px-2.5 rounded-lg"
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
                  <li className="list-disc">
                    Energy Storage and Sustainability
                  </li>
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
          <div className="mt-5">
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
          </div>
          <div className="mt-5">
            <h3 className="text-blue-700 text-2xl md:text-3xl font-bold">
              Our Sponsors
            </h3>
            <hr className="bg-blue-700 border h-1 w-full my-2" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <div className=" flex items-center justify-center text-center">
                <img
                  className="w-[15rem] h-auto"
                  src={assets.sponsor_logo_2}
                  alt=""
                />
              </div>

              <img
                className="w-[15rem] h-[15rem] items-center"
                src={assets.sponsor_logo_3}
                alt=""
              />
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-blue-700 text-2xl md:text-3xl font-bold">
              Knowledge Partners
            </h3>
            <hr className="bg-blue-700 border h-1 w-full my-2" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <img src={assets.sponsor_logo_4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
