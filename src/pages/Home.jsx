import React from "react";
import { assets } from "../assets/assets";

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
          className="py-2 text-sm md:text-lg"
        >
          Submission Date:- 30th November, 2025
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Notification of Acceptance:- 10th January, 2026
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Conference Date:- 6th - 7th February, 2026
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            fugit doloribus deserunt labore. In, facilis excepturi ab aspernatur
            quibusdam cupiditate nostrum temporibus laudantium! Omnis repellat
            iste nulla accusamus, aliquam minima.
          </p>
        </div>
        {/* About Manav Rachna University */}
        <div className="mb-12">
          <h3 className="text-blue-700 text-2xl md:text-3xl font-bold">
            About Manav Rachna University
          </h3>
          <hr className="bg-blue-700 border h-1 w-full my-2" />
          <p className="text-base md:text-lg text-gray-700 text-justify">
            Manav Rachna University is a leader in educational excellence,
            having recently received the prestigious NAAC Grade A accreditation
            in June 2024. This honor highlights the dedication to providing
            high-quality education and fostering an environment of academic
            rigor and innovation. The status as a top-tier university is further
            reinforced by achieving the Platinum band in the Outcome-Based
            Education Rankings 2024, reflecting the strong focus on student
            outcomes and academic effectiveness. Additionally, MRU has been
            recognized in the Diamond band category under the Sustainable
            Institutions of India Green Rankings 2024, underscoring the
            commitment to sustainability and environmental stewardship. MRU has
            also been ranked 5th amongst the Private and Deemed
            Multidisciplinary Universities in the Delhi NCR region, according to
            The Week-Hansa Research Best University Survey 2024. The School of
            Engineering has received significant accolades, ranking 2nd in
            Faridabad and 3rd in Haryana in the BW BusinessWorld Top Engineering
            Institutes Ranking 2024. These achievements showcase the unwavering
            commitment to excellence in engineering education and research.
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
            <b>• Focus Areas:</b> Advanced computing, information security, AI,
            and emerging trends in communication technologies.
          </p>
          <p className="text-base md:text-lg text-gray-700 text-justify">
            <b>• Global Participation:</b> International researchers,
            practitioners, and experts sharing cutting-edge research.
          </p>
          <p className="text-base md:text-lg text-gray-700 text-justify">
            <b>• Expert Sessions:</b> Keynote addresses and technical talks from
            industry leaders and academic pioneers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
