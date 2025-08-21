import React from "react";
import {
  FaLandmark, // Delhi (India Gate)
  FaGopuram, // Varanasi (temple style)
  FaTree, // Faridabad
  FaBuilding, // Noida
  FaWater, // Bhopal
  FaMonument, // Kolkata
  FaUniversity, // Aligarh
} from "react-icons/fa";

export default function VenueLocations() {
  const venues = [
    {
      name: "Delhi",
      icon: <FaLandmark className="w-10 h-10 text-yellow-400" />,
    },
    {
      name: "Varanasi",
      icon: <FaGopuram className="w-10 h-10 text-yellow-400" />,
    },
    {
      name: "Faridabad",
      icon: <FaTree className="w-10 h-10 text-yellow-400" />,
    },
    {
      name: "Noida",
      icon: <FaBuilding className="w-10 h-10 text-yellow-400" />,
    },
    { name: "Bhopal", icon: <FaWater className="w-10 h-10 text-yellow-400" /> },
    {
      name: "Kolkata",
      icon: <FaMonument className="w-10 h-10 text-yellow-400" />,
    },
    {
      name: "Aligarh",
      icon: <FaUniversity className="w-10 h-10 text-yellow-400" />,
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Venue <span className="text-yellow-400">Locations</span>
        </h2>
        <p className="text-gray-300 mb-12">
          Our award ceremonies are hosted in these prestigious cities across
          India.
        </p>

        {/* Venue Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {venues.map((venue, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-xl p-6 flex flex-col items-center 
              hover:bg-yellow-500/20 border border-gray-700 hover:border-yellow-400 transition-all">
              {venue.icon}
              <h3 className="mt-3 text-lg font-semibold text-white">
                {venue.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
