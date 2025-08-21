import React from "react";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/image.png"
        alt="EdVantage Udaan Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          EdVantage Udaan 2025
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-200">
          A National Education Award — <br />
          <span className="text-yellow-400 font-semibold">
            Education with Purpose, Values for Life
          </span>
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeO3ylhKM3z9qd9EUJGzo4QxTHcfsSY7y2m3AqVRCfUH28wbA/viewform"
            className="bg-yellow-500 text-black font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-yellow-400 transition-transform transform hover:scale-105">
            Register Now
          </a>
          <a
            href="#about"
            className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold px-8 py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition-all">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
