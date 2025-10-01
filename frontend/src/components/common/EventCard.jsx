import React, { useState } from "react";

// Utility: parse "26th October 2025" safely
const parseEventDate = (dateStr) => {
  if (!dateStr) return null;
  const cleaned = dateStr.replace(/(\d+)(st|nd|rd|th)/, "$1");
  const date = new Date(cleaned);
  return isNaN(date) ? null : date;
};

const EventCard = ({ event, upcomingEvents }) => {
  const [imageError, setImageError] = useState(false);
  const imgSrc =
    imageError || !event.image ? "/placeholder-event.jpg" : event.image;

  const eventDate = parseEventDate(event.date);

  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col border border-gray-100">
      {/* Image with overlay */}
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={imgSrc}
          alt={event.title || "Event"}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        {/* Date badge */}
        {eventDate && (
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md rounded-lg px-3 py-1 shadow-sm">
            <span className="text-sm font-medium text-gray-800">
              {event.date}
            </span>
          </div>
        )}

        {/* Status badge */}
        <div
          className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full shadow-sm ${
            upcomingEvents
              ? "bg-green-600 text-white"
              : "bg-gray-500 text-white"
          }`}>
          {upcomingEvents ? "Upcoming" : "Past"}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
          {event.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {event.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          {event.link && (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors">
              View Details
            </a>
          )}
          {upcomingEvents && event.form && (
            <a
              href={event.form}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
              Register
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
