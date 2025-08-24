import React, { useState, useEffect } from "react";

// Import components
import FilterBar from "../../components/Sessions/FilterBar";
import TimeTabs from "../../components/Sessions/TimeTabs";
import EventCard from "../../components/Sessions/EventCard";

// Import data
import eventsData from "../../data/sessionData/events.json";

const EventDashboard = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter events based on active tab and filters
  useEffect(() => {
    let events = [...eventsData];

    // Filter by time category
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekEnd = new Date(today);
    weekEnd.setDate(weekEnd.getDate() + 7);

    if (activeTab === "today") {
      events = events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.toDateString() === today.toDateString();
      });
    } else if (activeTab === "thisWeek") {
      events = events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate >= today && eventDate <= weekEnd;
      });
    } else if (activeTab === "upcoming") {
      events = events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate >= today;
      });
    } else if (activeTab === "past") {
      events = events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate < today;
      });
    }

    // Filter by category
    if (categoryFilter !== "all") {
      events = events.filter((event) => event.type === categoryFilter);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      events = events.filter(
        (event) =>
          event.title.toLowerCase().includes(query) ||
          event.description.toLowerCase().includes(query)
      );
    }

    setFilteredEvents(events);
  }, [activeTab, categoryFilter, searchQuery]);

  // Get unique categories for filter
  const categories = ["all", ...new Set(eventsData.map((event) => event.type))];
  console.log(filteredEvents);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">Event Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Discover and join our upcoming events and sessions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Filter Section */}
        <FilterBar
          categories={categories}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Time Tabs */}
        <TimeTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
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
              Try adjusting your filters or search query to find events
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDashboard;
