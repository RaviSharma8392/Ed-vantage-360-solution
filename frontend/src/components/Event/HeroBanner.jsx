import React from "react";

export default function HeroBanner({
  backgroundImage,
  title,
  tagline,
  multilingualTexts = [],
  buttons = [],
}) {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-8">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-xl font-sans">
          {title}
        </h1>

        {/* Tagline */}
        {tagline && (
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl italic font-light text-gray-200 mb-8 max-w-3xl mx-auto">
            <span className="text-yellow-400 font-semibold">{tagline}</span>
          </p>
        )}

        {/* Multilingual */}
        {multilingualTexts.length > 0 && (
          <div className="space-y-1 text-sm sm:text-base md:text-lg text-gray-300 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            {multilingualTexts.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        )}

        {/* Buttons */}
        {buttons.length > 0 && (
          <div className="flex flex-col md:flex-row justify-center gap-4">
            {buttons.map((btn, idx) => (
              <a
                key={idx}
                href={btn.href}
                target={btn.target || "_self"}
                rel={btn.target === "_blank" ? "noopener noreferrer" : ""}
                className={`${
                  btn.primary
                    ? "bg-yellow-500 text-black font-bold shadow-lg hover:bg-yellow-400 transition-transform transform hover:scale-105"
                    : "bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-black transition-all"
                } px-8 py-3 rounded-2xl text-base md:text-lg`}>
                {btn.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
