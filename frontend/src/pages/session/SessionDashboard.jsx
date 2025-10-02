import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import EventCard from "../../components/common/EventCard";

const sheetUrl = import.meta.env.VITE_EVENTSHEET_CSV;

// Utility: parse "26th October 2025" -> Date
const parseEventDate = (dateStr) => {
  if (!dateStr) return new Date();
  const cleaned = dateStr.replace(/(\d+)(st|nd|rd|th)/, "$1");
  return new Date(cleaned);
};

const EventDashboard = () => {
  const [events, setEvents] = useState([]);
  const [activeTab, setActiveTab] = useState("upcoming"); // upcoming | past

  useEffect(() => {
    Papa.parse(sheetUrl, {
      download: true,
      header: true,
      complete: function (results) {
        // console.log("CSV Data:", results.data);
        setEvents(results.data.filter((e) => e.title)); // filter empty rows
      },
      error: function (err) {
        console.error("Error fetching sheet:", err);
      },
    });
  }, []);

  const today = new Date();
  const upcomingEvents = events.filter(
    (event) => parseEventDate(event.date) >= today
  );
  const pastEvents = events.filter(
    (event) => parseEventDate(event.date) < today
  );

  const currentEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Tab Navbar */}
      <div className="flex justify-center mb-10">
        <div className="bg-white rounded-xl shadow p-2 flex space-x-4">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              activeTab === "upcoming"
                ? "bg-green-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}>
            Upcoming Events
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              activeTab === "past"
                ? "bg-green-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}>
            Past Events
          </button>
        </div>
      </div>

      {/* Event Grid */}
      {currentEvents.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {currentEvents.map((event, i) => (
            <EventCard key={i} event={event} activeTab={activeTab} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          {activeTab === "upcoming" ? "No upcoming events." : "No past events."}
        </p>
      )}
    </div>
  );
};

export default EventDashboard;
