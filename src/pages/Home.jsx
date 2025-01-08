import React from "react";
import { assets } from "../assets/assets";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Full-width Image */}
      <img
        src={assets.mru_poster}
        alt="Home Background"
        className="w-full h-auto"
      />

      {/* Scrolling Text */}
      <div className="bg-red-600 text-white">
        <marquee behavior="scroll" direction="left" className="py-2 text-lg">
          Submission Date &#8226; 28th February, 2025 &#8226; Notification of
          Acceptance &#8226; 15th March, 2025 &#8226; Registration Deadline Date
          &#8226; 4th - 6th April, 2025
        </marquee>
      </div>

      {/* Heading and Paragraph */}
      <div className=" px-8 py-4 mt-8 ml-10">
        <h3 className="text-3xl font-bold mb-4">
          About Manav Rachna University
        </h3>
        <p className="text-lg text-gray-700 max-w-5xl text-justify">
          Manav Rachna University is a leader in educational excellence, having
          recently received the prestigious NAAC Grade A accreditation in June
          2024. This honor highlights the dedication to providing high-quality
          education and fostering an environment of academic rigor and
          innovation. The status as a top-tier university is further reinforced
          by achieving the Platinum band in the Outcome-Based Education Rankings
          2024, reflecting the strong focus on student outcomes and academic
          effectiveness. Additionally, MRU has been recognized in the Diamond
          band category under the Sustainable Institutions of India Green
          Rankings 2024, underscoring the commitment to sustainability and
          environmental stewardship. MRU has also been ranked 5th amongst the
          Private and Deemed Multidisciplinary Universities in the Delhi NCR
          region, according to The Week-Hansa Research Best University Survey
          2024. The School of Engineering has received significant accolades,
          ranking 2nd in Faridabad and 3rd in Haryana in the BW BusinessWorld
          Top Engineering Institutes Ranking 2024. These achievements showcase
          the unwavering commitment to excellence in engineering education and
          research.
        </p>
      </div>
      <div className=" px-8 py-4 mt-8 ml-10">
        <h3 className="text-3xl font-bold mb-4">About Conference</h3>
        <p className="text-lg text-gray-700 max-w-5xl text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
          fugit doloribus deserunt labore. In, facilis excepturi ab aspernatur
          quibusdam cupiditate nostrum temporibus laudantium! Omnis repellat
          iste nulla accusamus, aliquam minima.
        </p>
      </div>
      <div className=" px-8 py-4 mt-8 ml-10">
        <h3 className="text-3xl font-bold mb-4">
          Conference Topics (Not Limited to)
        </h3>
        <ul>
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
          <li>Ontology</li>
        </ul>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
