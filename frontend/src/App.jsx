import React, { useState, useEffect } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Layout from "./layouts/UserLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./components/Team";
import ServiceComponent from "./components/ServiceCard";
import Blog from "./components/Blog";
import Careers from "./components/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermAndService";
import CookiePrivacyPolicy from "./pages/Cokkies";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import AdminDashboard from "./screen/AdminDashbord";
import AdminLayout from "./layouts/AdminLayout";
import PricingPage from "./pages/PricingPage";
import User from "./User";
import CompletedWebinar from "./pages/Webinar";
import EdVantageWebinar from "./pages/NextEvent";

// Updated event details from EDVANTAGE LAUREATES AWARDS CEREMONY
const eventDetails = {
  title: "EDVANTAGE LAUREATES AWARDS CEREMONY",
  tagline: "Not Just Another Conclave - Education Reimagined!!!",
  description:
    "Empowering Educators, Enriching Classrooms! Transforming Teaching for Tomorrow's Learners!",
  date: "6 SEP 2025",
  location: "CROWNE PLAZA, MAYUR VIHAR, DELHI",
  cta: "REGISTER NOW",
  partner: "NGO Partner HOPE 8 Care Foundation",
};

const EventPopup = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Removed bg-black bg-opacity-50 for transparency */}
      <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden w-full max-w-md mx-4 border border-gray-200">
        {/* Header with close button */}
        <div className="flex justify-between items-center bg-indigo-600 p-4">
          <h3 className="text-white font-bold text-xl">Upcoming Event</h3>
          <button
            onClick={onClose}
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
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            {event.title}
          </h2>
          <p className="text-indigo-600 italic mb-3">{event.tagline}</p>
          <p className="text-gray-700 mb-4">{event.description}</p>

          <div className="flex items-center text-gray-600 mb-3">
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
            <span className="font-medium">{event.date}</span>
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
            <span className="font-medium">{event.location}</span>
          </div>

          <p className="text-sm text-gray-500 mb-4">{event.partner}</p>

          <div className="flex space-x-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition duration-200">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSff5GcdE1EKvrjZlPKXvc-aKi0RXb4Q68_LAaaJZm53FO-i6A/viewform"
                target="_blank"
                rel="noopener noreferrer">
                {" "}
                {event.cta}
              </a>
            </button>
            <button
              className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-lg font-medium transition duration-200"
              onClick={onClose}>
              Remind Me Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Render the popup outside of Routes */}
      {showPopup && (
        <EventPopup event={eventDetails} onClose={() => setShowPopup(false)} />
      )}

      <Routes>
        {/* <Route path="/next" element={<EdVantageWebinar />} /> */}
        {/* <Route path="/web" element={<CompletedWebinar />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<CookiePrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<ServiceComponent />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="/admin/users" element={<User />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
