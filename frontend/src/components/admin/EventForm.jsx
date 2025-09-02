import React, { useState } from "react";
import ImageUpload from "../ImageUpload";

const EventForm = ({ event, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(event?.title || "");
  const [description, setDescription] = useState(event?.description || "");
  const [date, setDate] = useState(event?.date || "");
  const [time, setTime] = useState(event?.time || "");
  const [image, setImage] = useState(event?.image || null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      id: event?._id,
      title,
      description,
      date,
      time,
      image, // ✅ uploaded Cloudinary URL
    };

    onSubmit(newEvent);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 max-w-4xl mx-auto mt-6">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        {event ? "✏️ Edit Event" : "➕ Create New Event"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter event title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Description
            </label>
            <textarea
              placeholder="Event details..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="5"
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Time
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Upload Image
          </label>
          <ImageUpload onUpload={(url) => setImage(url)} />
          {image && (
            <div className="mt-3">
              <img
                src={image}
                alt="preview"
                className="h-44 w-full object-cover rounded-lg border border-gray-300 shadow-sm"
              />
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="md:col-span-2 flex justify-end gap-3 mt-6">
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-lg transition shadow-sm">
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition shadow">
            {event ? "Update Event" : "Create Event"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
