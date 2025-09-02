import React, { useState } from "react";
import { format } from "date-fns";
import {
  FaRegCalendarAlt,
  FaRegClock,
  FaEdit,
  FaTrash,
  FaEllipsisV,
  FaEye,
} from "react-icons/fa";

const EventCard = ({ session, event, onEdit, onDelete, onView }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => setImageError(true);
  const toggleMenu = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };
  const handleEdit = (e) => {
    e.stopPropagation();
    setShowMenu(false);
    onEdit(event);
  };
  const handleDelete = (e) => {
    e.stopPropagation();
    setShowMenu(false);
    onDelete(event.id || event._id);
  };
  const handleView = (e) => {
    e.stopPropagation();
    setShowMenu(false);
    if (onView) onView(event);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100 w-full flex flex-col">
      {/* Image */}
      <div className="relative w-full ">
        <img
          src={
            imageError
              ? "/placeholder-event.jpg"
              : event.image || "/placeholder-event.jpg"
          }
          alt={event.title}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />

        {/* Options menu */}
        {session === "admin" && (
          <div className="absolute top-3 right-3">
            <button
              onClick={toggleMenu}
              aria-label="Event options"
              className="bg-white rounded-full p-2 shadow-sm hover:bg-gray-50 transition-colors">
              <FaEllipsisV className="h-4 w-4 text-gray-600" />
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                <button
                  onClick={handleView}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                  <FaEye className="mr-2 text-blue-500" />
                  View Details
                </button>
                <button
                  onClick={handleEdit}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                  <FaEdit className="mr-2 text-indigo-500" />
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left">
                  <FaTrash className="mr-2" />
                  Delete
                </button>
              </div>
            )}
          </div>
        )}

        {/* Date badge */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm">
          <div className="flex items-center">
            <FaRegCalendarAlt className="text-indigo-600 mr-1.5" />
            <span className="text-sm font-medium text-gray-800">
              {format(new Date(event.date), "MMM dd, yyyy")}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 line-clamp-2">
          {event.title}
        </h3>
        <p className="text-sm sm:text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {event.description}
        </p>

        <div className="flex items-center justify-between text-gray-500 mb-4">
          <div className="flex items-center">
            <FaRegClock className="h-4 w-4 mr-1.5" />
            <span className="text-sm">{event.time}</span>
          </div>
        </div>

        {session === "admin" && (
          <div className="flex justify-between pt-3 border-t border-gray-100">
            <button
              onClick={() => onEdit(event)}
              className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center transition-colors px-3 py-1.5 rounded-md hover:bg-indigo-50">
              <FaEdit className="h-4 w-4 mr-1.5" />
              Edit
            </button>
            <button
              onClick={() => onDelete(event.id || event._id)}
              className="text-red-600 hover:text-red-800 font-medium flex items-center transition-colors px-3 py-1.5 rounded-md hover:bg-red-50">
              <FaTrash className="h-4 w-4 mr-1.5" />
              Delete
            </button>
          </div>
        )}
      </div>

      {/* Status bar */}
      <div
        className={`h-1.5 w-full ${
          new Date(event.date) > new Date() ? "bg-green-500" : "bg-gray-400"
        }`}></div>
    </div>
  );
};

export default EventCard;
