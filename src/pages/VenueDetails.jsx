import React from "react";
import { assets } from "../assets/assets";

const touristPlaces = [
  {
    name: "Barsana",
    location: "Uttar Pradesh, India",
    image: assets.place_1,
    description:
      "The birthplace of Radha Rani, famous for the Lathmar Holi festival.",
    mapLink: "https://www.google.com/maps/place/Barsana,+Uttar+Pradesh+281405/@27.6485702,77.3668968,15z/data=!3m1!4b1!4m6!3m5!1s0x397319e00db4f8df:0xcb42db313d95573d!8m2!3d27.6463577!4d77.3768099!16zL20vMGNfMDU1?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Vrindavan",
    location: "Uttar Pradesh, India",
    image: assets.place_2,
    description:
      "A sacred town associated with Lord Krishna, known for its beautiful temples.",
    mapLink: "https://www.google.com/maps/place/Vrindavan,+Uttar+Pradesh/@27.5648854,77.618171,13z/data=!4m6!3m5!1s0x39736fcb5e9a2309:0x9868374c5faaf3ce!8m2!3d27.5650088!4d77.6593394!16zL20vMDRmeXFm?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Lotus Temple",
    location: "Delhi, India",
    image: assets.place_3,
    description:
      "A Bahá'í House of Worship, famous for its lotus-shaped architectural design.",
    mapLink: "https://www.google.com/maps/search/lotus+temple/@28.5535031,77.2562873,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Akshardham Temple",
    location: "Delhi, India",
    image: assets.place_4,
    description:
      "A magnificent Hindu temple known for its intricate carvings and cultural exhibitions.",
    mapLink: "https://www.google.com/maps/place/Akshardham+Temple/@28.613132,77.274185,17z/data=!3m1!4b1!4m6!3m5!1s0x390d030000ef6bc1:0x1a6d4326f14e5b37!8m2!3d28.6131274!4d77.2787984!16s%2Fg%2F11w1xtnh01?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "India Gate",
    location: "Delhi, India",
    image: assets.place_5,
    description:
      "A war memorial dedicated to Indian soldiers who fought in World War I.",
    mapLink: "https://www.google.com/maps/place/India+Gate,+New+Delhi,+Delhi/@28.6090749,77.2226051,15z/data=!3m1!4b1!4m6!3m5!1s0x390ce2db961be393:0xf6c7ef5ee6dd10ae!8m2!3d28.6110886!4d77.2345184!16s%2Fg%2F12hmk810l?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    name: "Qutub Minar",
    location: "Delhi, India",
    image: assets.place_6,
    description:
      "A UNESCO World Heritage Site, the tallest brick minaret in the world.",
    mapLink: "https://www.google.com/maps/place/Qutab+Minar,+Seth+Sarai,+Mehrauli,+New+Delhi,+Delhi+110030/@28.5244993,77.1829428,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1e065dc72379:0xf6e7259f610de1d7!8m2!3d28.5244946!4d77.1855177!16zL20vMDNjX2g4?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D",
  },
];

const VenueDetails = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Nearby Tourist Places
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {touristPlaces.map((place, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              className="w-full h-40 object-cover" // Reduced height here
              src={place.image}
              alt={place.name}
            />
            <div className="p-3"> {/* Reduced padding here */}
              <h2 className="text-xl font-semibold text-gray-800"> {/* Reduced font size here */}
                {place.name}
              </h2>
              <p className="text-gray-600 text-sm">{place.location}</p>
              <p className="mt-2 text-gray-700 text-sm">{place.description}</p>
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
