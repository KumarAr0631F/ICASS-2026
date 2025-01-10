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

        <div className="mb-12">
          <h3 className="text-blue-700 text-2xl md:text-3xl font-bold">
            School Of Engineering
          </h3>
          <hr className="bg-blue-700 border h-1 w-full my-2" />
          <p className="text-base md:text-lg text-gray-700 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            iusto adipisci blanditiis accusamus earum. Recusandae dignissimos
            necessitatibus aut tempore quibusdam! Quibusdam, fugiat quas. Neque
            minima sapiente repellat inventore in adipisci alias et quidem
            placeat at. Officia optio iure aliquid! Ipsum!
          </p>
        </div>

        {/* Conference Topics */}
        <div className="mb-12">
          <h3 className="text-blue-700 text-2xl md:text-3xl font-bold">
            Conference Topics (Not Limited to)
          </h3>
          <hr className="bg-blue-700 border h-1 w-full my-2" />
          {/* Two-column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="list-disc pl-6 text-base md:text-lg text-gray-700">
              <li>Artificial Intelligence</li>
              <li>LLM (Large Language Models)</li>
              <li>Federated Learning</li>
              <li>Data Science</li>
              <li>Big Data</li>
              <li>Software Reliability Engineering</li>
              <li>Blockchain</li>
              <li>Cryptography</li>
              <li>Watermarking</li>
              <li>Privacy and Preservation</li>
              <li>Information Security</li>
              <li>Digital Services and Protection Mechanism</li>
              <li>Cyber Security</li>
              <li>Electronics & Communication Engineering</li>
              <li>Renewable Energy</li>
              <li>Control Systems</li>
              <li>AI in Fashion Technology</li>
              <li>Soft Computing</li>
              <li>Quantum Computing</li>
              <li>Machine Learning</li>
              <li>Deep Learning</li>
              <li>5G/6G/7G Technologies</li>
              <li>IoT (Internet of Things)</li>
              <li>IIoT (Industrial IoT)</li>
              <li>IMoT (Internet of Medical Things)</li>
            </ul>

            <ul className="list-disc pl-6 text-base md:text-lg text-gray-700">
              <li>Ontology</li>
              <li>Image Processing</li>
              <li>Wireless Communication Network</li>
              <li>Bitcoin</li>
              <li>Robotics and Automation</li>
              <li>Smart Grid</li>
              <li>Electric Vehicles</li>
              <li>Cryptocurrency</li>
              <li>Distributed & Parallel Computing</li>
              <li>High Performance Computing</li>
              <li>Cloud Quality Management</li>
              <li>Cloud & Grid Computing</li>
              <li>Mobile Computing</li>
              <li>Edge Computing</li>
              <li>Fog Computing</li>
              <li>Cognitive Computing</li>
              <li>Computer Vision and Image Processing Applications</li>
              <li>Intelligent Computing Systems</li>
              <li>AR/VR/Metaverse</li>
              <li>Human Computer Interface</li>
              <li>Cyborg</li>
              <li>Sustainability</li>
              <li>Multimedia Technology</li>
              <li>E-commerce</li>
              <li>DNA Computing</li>
            </ul>
          </div>
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
