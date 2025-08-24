// components/EventCard.jsx
import React, { useState, useEffect } from "react";

const EventCard = ({ event }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [isHovered, setIsHovered] = useState(false);

  function calculateTimeRemaining() {
    const now = new Date();
    const eventDate = new Date(`${event.date}T${event.time.split(" - ")[0]}`);
    const difference = eventDate - now;

    if (difference <= 0) return null;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 60000);

    return () => clearInterval(timer);
  }, [event]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const isUpcoming =
    new Date(`${event.date}T${event.time.split(" - ")[0]}`) > new Date();

  return (
    <div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 transform ${
        isHovered ? "scale-105 shadow-2xl" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {/* Event Image */}
      <div className="relative overflow-hidden">
        {event.poster_url ? (
          <img
            src={event.poster_url}
            alt="Zoom Event"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-white opacity-30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}

        {/* Event Status Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold shadow ${
              isUpcoming ? "bg-green-500 text-white" : "bg-gray-400 text-white"
            }`}>
            {isUpcoming ? "Upcoming" : "Past"}
          </span>
        </div>

        {/* Event Type Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600 text-white shadow">
            {event.type}
          </span>
        </div>

        {/* Countdown */}
        {isUpcoming && timeRemaining && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <div className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-xl flex space-x-4 backdrop-blur-sm">
              {timeRemaining.days > 0 && (
                <div className="text-center">
                  <div className="font-bold">{timeRemaining.days}</div>
                  <div className="text-xs">days</div>
                </div>
              )}
              <div className="text-center">
                <div className="font-bold">{timeRemaining.hours}</div>
                <div className="text-xs">hrs</div>
              </div>
              <div className="text-center">
                <div className="font-bold">{timeRemaining.minutes}</div>
                <div className="text-xs">mins</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Event Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {event.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {event.description}
        </p>

        {/* Date & Time */}
        <div className="flex items-center text-gray-600 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-indigo-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{formatDate(event.date)}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-purple-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{event.time}</span>
        </div>

        {/* Zoom Info */}
        {event.platform === "Zoom" && (
          <div className="mb-4 bg-indigo-50 p-3 rounded-lg">
            <div className="flex items-center text-indigo-700 mb-1 font-medium">
              <img src="/zoom-icon.png" alt="Zoom" className="h-5 w-5 mr-2" />
              Zoom Meeting
            </div>
            <p className="text-sm text-gray-600">
              ID: {event.meetingId} | Passcode: {event.passcode}
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex space-x-3 mt-5">
          {isUpcoming && event.joinLink && (
            <a
              href={event.joinLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-2 px-4 rounded-lg text-center font-semibold shadow-md transition-transform ${
                isHovered ? "scale-105" : ""
              }`}>
              Join Now
            </a>
          )}
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium transition-colors">
            Details
          </button>
          {isUpcoming && (
            <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 py-2 px-4 rounded-lg font-medium transition-colors">
              Reminder
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
