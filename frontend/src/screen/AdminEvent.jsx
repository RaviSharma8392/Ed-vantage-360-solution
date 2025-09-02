// src/pages/AdminEvents.jsx
import React, { useEffect, useState } from "react";
import { useEvents } from "../hooks/useEvents";

// Components
import EventForm from "../components/admin/EventForm";
import EventCard from "../components/common/EventCard";

const AdminEvents = () => {
  const { events, loading, error, addEvent, editEvent, removeEvent } =
    useEvents();

  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [editingEvent, setEditingEvent] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Filter logic
  useEffect(() => {
    let filtered = [...events];
    const today = new Date(new Date().setHours(0, 0, 0, 0));

    if (activeTab === "today") {
      filtered = filtered.filter(
        (e) => new Date(e.date).toDateString() === today.toDateString()
      );
    } else if (activeTab === "upcoming") {
      filtered = filtered.filter((e) => new Date(e.date) >= today);
    } else if (activeTab === "past") {
      filtered = filtered.filter((e) => new Date(e.date) < today);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q)
      );
    }

    setFilteredEvents(filtered);
  }, [events, activeTab, searchQuery]);

  const handleSubmitEvent = async (eventData) => {
    if (eventData.id) {
      await editEvent(eventData.id, eventData);
    } else {
      await addEvent(eventData);
    }
    setShowForm(false);
    setEditingEvent(null);
  };

  const handleDeleteEvent = async (eventId) => {
    if (window.confirm("Delete this event?")) {
      await removeEvent(eventId);
    }
  };

  const tabs = [
    { key: "all", label: "All Events", color: "bg-gray-100 text-gray-800" },
    { key: "today", label: "Today", color: "bg-indigo-100 text-indigo-700" },
    {
      key: "upcoming",
      label: "Upcoming",
      color: "bg-green-100 text-green-700",
    },
    { key: "past", label: "Past", color: "bg-red-100 text-red-700" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Event Management
            </h1>
            <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
              Create, edit, and manage all events
            </p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition-colors">
            + Add New Event
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row justify-between gap-4 items-center">
        {/* Time Tabs */}
        <div className="flex gap-2 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-md font-medium text-sm transition-all ${
                activeTab === tab.key
                  ? `${tab.color} shadow`
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
              }`}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex flex-col w-full md:w-64 mt-2 md:mt-0">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search events..."
            className="rounded-md border-gray-300 px-3 py-2 w-full focus:ring-indigo-400 focus:border-indigo-400"
          />
        </div>
      </div>

      {/* Event Grid */}
      <div className="container mx-auto px-4 sm:px-6 py-4">
        {loading ? (
          <p className="text-center text-gray-600 py-12">Loading events...</p>
        ) : error ? (
          <p className="text-center text-red-500 py-12">{error}</p>
        ) : filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard
                session="admin"
                key={event._id}
                event={event}
                onEdit={(ev) => {
                  setEditingEvent(ev);
                  setShowForm(true);
                }}
                onDelete={() => handleDeleteEvent(event._id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <h3 className="text-xl font-medium">No events found</h3>
            <button
              onClick={() => setShowForm(true)}
              className="bg-indigo-600 text-white mt-4 px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition-colors">
              Create Event
            </button>
          </div>
        )}
      </div>

      {/* Event Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-start sm:items-center overflow-y-auto z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative animate-slide-in">
            <button
              onClick={() => {
                setShowForm(false);
                setEditingEvent(null);
              }}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold text-2xl">
              &times;
            </button>
            <EventForm
              event={editingEvent}
              onSubmit={handleSubmitEvent}
              onCancel={() => {
                setShowForm(false);
                setEditingEvent(null);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEvents;
