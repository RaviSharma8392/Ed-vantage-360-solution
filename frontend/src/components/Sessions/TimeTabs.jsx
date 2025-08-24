// components/TimeTabs.jsx
import React from "react";

const TimeTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "upcoming", label: "Upcoming" },
    { id: "today", label: "Today" },
    { id: "thisWeek", label: "This Week" },
    { id: "past", label: "Past Events" },
  ];

  return (
    <div className="flex overflow-x-auto scrollbar-hide -mx-4 px-4">
      <div className="flex space-x-2 min-w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab(tab.id)}>
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeTabs;
