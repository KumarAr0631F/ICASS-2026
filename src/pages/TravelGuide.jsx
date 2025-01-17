import React from 'react';

const TravelGuide = () => {
  return (
    <div className=" py-10 px-5 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Conference Venue</h1>
        <p className="text-gray-700 mb-6">
          <strong>Manav Rachna University</strong>
          <br />
          Aravalli Campus, Sector 43, Surajkund Road,
          <br />
          Faridabad, Haryana - 121004, India
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-3">About the Venue:</h2>
        <p className="text-gray-700 mb-4">
          Manav Rachna University is renowned for its state-of-the-art campus and world-class facilities, making it an ideal location for hosting conferences, seminars, and academic events. Located in the heart of the National Capital Region (NCR), the university offers a perfect blend of modern infrastructure and a serene environment, ensuring a productive and engaging experience for all participants.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-3">Venue Features:</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Modern auditoriums and seminar halls with advanced audio-visual systems and high-definition projectors.</li>
          <li>Spacious interiors designed to accommodate large gatherings comfortably.</li>
          <li>High-speed internet connectivity for seamless digital interactions.</li>
          <li>On-campus amenities including gardens, food courts, and relaxation zones.</li>
          <li>Convenient accessibility via road and public transport with proximity to major NCR landmarks.</li>
          <li>Adequate parking facilities for personal vehicles.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mb-3">Nearby Attractions:</h2>
        <p className="text-gray-700 mb-4">
          The campus is located near Surajkund, a historical and cultural hub known for its annual international crafts fair. Other nearby attractions include the serene Aravalli hills, Badkhal Lake, and several shopping and dining options in Faridabad and Gurgaon.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-3">Contact Information:</h2>
        <p className="text-gray-700">
          For queries related to the conference venue, please reach out to us:
          <br />
          <strong>Email:</strong> [Provide Email Address]
          <br />
          <strong>Phone:</strong> [Provide Contact Number]
          <br />
          <strong>Website:</strong> [Insert University Website Link]
        </p>
      </div>
    </div>
  );
};

export default TravelGuide;
