import React from "react";

const Track = () => {
  return (
    <div className="px-6 py-10 lg:px-20">
      <h1 className="text-2xl text-blue-600 lg:text-4xl font-bold text-center mb-6">
        ICASS-2026 Conference Tracks and Topics
      </h1>
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
          <strong>Track-3:</strong> Futuristic Tools and Technologies
        </li>
        <li>
          <strong>Track-4:</strong> Smart Electronics and Next-Gen Communication
        </li>
        <li>
          <strong>Track-5:</strong> Smart Cities and Sustainability
        </li>
        <li>
          <strong>Track-6:</strong> Industry 5.0 and Cyber Physical Systems
        </li>
        <li>
          <strong>Track-7:</strong> Smart Materials for Sustainable Technology
        </li>
      </ul>

      <div className="mt-8 text-center">
        <p className="text-sm lg:text-base text-gray-600">
          Join us to explore these groundbreaking topics and shape the digital
          future!
        </p>
      </div>
    </div>
  );
};

export default Track;
