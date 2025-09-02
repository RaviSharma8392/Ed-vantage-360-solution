// src/pages/User/EventDashboard.jsx
import React, { useState, useEffect } from "react";

// Components
import TimeTabs from "../../components/Sessions/TimeTabs";
import EventCard from "../../components/common/EventCard";

// API service
import { getEvents } from "../../service/eventService";

const EventDashboard = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const data = await getEvents();
        setEvents(data);
      } catch (err) {
        setError("Failed to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  // Apply filters
  useEffect(() => {
    let filtered = [...events];
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    if (activeTab === "today") {
      filtered = filtered.filter(
        (event) => new Date(event.date).toDateString() === today.toDateString()
      );
    } else if (activeTab === "upcoming") {
      filtered = filtered.filter((event) => new Date(event.date) >= today);
    } else if (activeTab === "past") {
      filtered = filtered.filter((event) => new Date(event.date) < today);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(query) ||
          event.description.toLowerCase().includes(query)
      );
    }

    setFilteredEvents(filtered);
  }, [events, activeTab, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Event Dashboard
          </h1>
          <p className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base">
            Explore and join our events
          </p>
        </div>
      </div>

      {/* Search & Tabs */}
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search events..."
            className="w-full sm:w-64 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
          />
          <TimeTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Content */}
        {loading ? (
          <div className="text-center text-gray-600 py-12">
            Loading events...
          </div>
        ) : error ? (
          <div className="text-center text-red-600 py-12">{error}</div>
        ) : filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center rounded-full bg-indigo-100 p-4 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-indigo-600"
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
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              No events found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or switch tabs to see events
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDashboard;
