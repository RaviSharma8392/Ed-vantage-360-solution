import React from "react";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="/image.png"
        alt="EdVantage Udaan Banner"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-8">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-xl font-sans">
          EdVantage Global School Summit & Awards 2025
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl italic font-light text-gray-200 mb-8 max-w-3xl mx-auto">
          <span className="text-yellow-400 font-semibold">
            “Celebrating Excellence Beyond Borders”
          </span>
        </p>

        {/* Multilingual */}
        <div className="space-y-1 text-sm sm:text-base md:text-lg text-gray-300 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
          <p>“शिक्षा और संस्कार पुरस्कार”</p>
          <p>“Education & Values Awards”</p>
          <p>“Prix de l'Éducation et des Valeurs”</p>
          <p>“教育と価値観賞”</p>
          <p>“교육과 가치상”</p>
          <p>“รางวัลการศึกษาและคุณธรรม”</p>
          <p>“අධ්‍යාපන හා අගය සම්මානය”</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="#about"
            className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold px-8 py-3 rounded-2xl hover:bg-yellow-400 hover:text-black transition-all text-base md:text-lg">
            Learn More
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeO3ylhKM3z9qd9EUJGzo4QxTHcfsSY7y2m3AqVRCfUH28wbA/viewform"
            className="bg-yellow-500 text-black font-bold px-8 py-3 rounded-2xl shadow-lg hover:bg-yellow-400 transition-transform transform hover:scale-105 text-base md:text-lg">
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}
