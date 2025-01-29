import React from "react";
import { assets } from "../assets/assets";

const touristPlaces = [
  {
    name: "Taj Mahal",
    location: "Agra, India",
    image: assets.place_1,
    description:
      "One of the Seven Wonders of the World, a symbol of love and Mughal architecture.",
    mapLink:
      "https://www.google.com/maps/place/Taj+Mahal/@27.1751495,78.0395673,17z/data=!3m1!4b1!4m6!3m5!1s0x39747121d702ff6d:0xdd2ae4803f767dde!8m2!3d27.1751448!4d78.0421422!16zL20vMGw4Y2I?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Red Fort",
    location: "Delhi, India",
    image: assets.place_2,
    description:
      "A historic fort that served as the main residence of the Mughal emperors.",
    mapLink:
      "https://www.google.com/maps/search/red+fort/@28.6550306,77.2346206,16z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Jaipur City Palace",
    location: "Jaipur, India",
    image: assets.place_3,
    description:
      "A stunning blend of Mughal and Rajasthani architecture with museums and courtyards.",
    mapLink:
      "https://www.google.com/maps/place/The+City+Palace/@26.9257991,75.8210965,17z/data=!3m1!4b1!4m6!3m5!1s0x396db40b8620b0c1:0x44801531017d7b60!8m2!3d26.9257943!4d75.8236714!16s%2Fm%2F07kctys?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Gateway of India",
    location: "Mumbai, India",
    image: assets.place_4,
    description:
      "A grand archway that overlooks the Arabian Sea, built during British rule.",
    mapLink:
      "https://www.google.com/maps/search/Gateway+of+India/@18.9219799,72.8320688,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Mysore Palace",
    location: "Mysore, India",
    image: assets.place_5,
    description:
      "A royal palace with Indo-Saracenic architecture, illuminated beautifully at night.",
    mapLink:
      "https://www.google.com/maps/place/Mysore+Palace/@12.3051682,76.6526,17z/data=!3m1!4b1!4m6!3m5!1s0x3baf701103f9a1f9:0xc37fbae2a124da0d!8m2!3d12.305163!4d76.6551749!16zL20vMDU2Y2xf?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D",
  },
];

const VenueDetails = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">
        Nearby Tourist Places
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {touristPlaces.map((place, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              className="w-full h-56 object-cover"
              src={place.image}
              alt={place.name}
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                {place.name}
              </h2>
              <p className="text-gray-600 text-sm">{place.location}</p>
              <p className="mt-2 text-gray-700">{place.description}</p>
              <a
                href={place.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                View on Map
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenueDetails;
