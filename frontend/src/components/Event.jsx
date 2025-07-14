import { useState, useEffect } from "react";

const EventPopup = ({ event, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-close after 8 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 8000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-md mx-4">
        {/* Header with close button */}
        <div className="flex justify-between items-center bg-indigo-600 p-4">
          <h3 className="text-white font-bold text-xl">Upcoming Event</h3>
          <button
            onClick={() => {
              setIsVisible(false);
              onClose();
            }}
            className="text-white hover:text-indigo-200 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Event content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {event.title}
          </h2>
          <div className="flex items-center text-gray-600 mb-4">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>
              {event.date} • {event.time}
            </span>
          </div>
          <div className="flex items-center text-gray-600 mb-4">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{event.location}</span>
          </div>
          <p className="text-gray-700 mb-6">{event.description}</p>

          <div className="flex space-x-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition duration-200">
              RSVP Now
            </button>
            <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-lg font-medium transition duration-200">
              Remind Me Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example usage:
// <EventPopup
//   event={{
//     title: "Annual Tech Conference",
//     date: "October 15, 2023",
//     time: "9:00 AM - 5:00 PM",
//     location: "Convention Center, Downtown",
//     description: "Join us for a day of cutting-edge technology presentations, workshops, and networking with industry leaders."
//   }}
//   onClose={() => console.log('Popup closed')}
// />
