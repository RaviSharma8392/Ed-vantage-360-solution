import React from "react";

const events = [
  {
    title: "EdVantage Global School Summit & Awards 2025 (GSSA)",
    date: "26th October 2025",
    description:
      "Recognising schools as catalysts of transformation—shaping character, inspiring innovation, and building inclusive, future-ready communities.",
    image: "https://edvantage360solution.netlify.app/image.png",
    link: "https://edvantage360solution.netlify.app/GSSA",
  },
  {
    title: "EdVantage Education Laureates Awards 2025 – 3rd Edition",
    date: "15th November 2025",
    description:
      "Recognising schools as catalysts of transformation—shaping character, inspiring innovation, and building inclusive, future-ready communities.",
    image:
      "https://edvantage360solution.netlify.app/8e5417a5-bcec-4981-b8f9-b74ad3710d97.jpeg",
    link: "https://edvantage360solution.netlify.app/ela-kolkata-edition",
  },
];

// Event Card Component
const EventCard = ({ event }) => (
  <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 group">
    {/* Event Image */}
    <img
      src={event.image}
      alt={event.title}
      className="w-full h-full object-cover"
      loading="lazy"
    />

    {/* Overlay Content */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
      <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition">
        {event.title}
      </h2>
      <p className="text-gray-200 text-sm mb-2">{event.date}</p>
      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
        {event.description}
      </p>

      {event.link && (
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition">
          View Details
        </a>
      )}
    </div>
  </div>
);

const EventDashboard = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Event Dashboard
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          Manage and explore all your events in one place
        </p>
      </div>

      {/* Event Grid */}
      {events?.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <EventCard key={i} event={event} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No events available.</p>
      )}
    </div>
  );
};

export default EventDashboard;
