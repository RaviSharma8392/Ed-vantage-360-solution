import React, { useState } from "react";

const ShowText = () => {
  const [showFullText, setShowFullText] = useState(false);

  const shortText = `"EdVantage 360 Solutions" is a one-stop partner for educational institutions and organizations seeking comprehensive, end-to-end support.`;

  const fullText = `"EdVantage 360 Solutions" is a one-stop partner for educational institutions and organizations seeking comprehensive, end-to-end support. 
  
We specialize in delivering holistic solutions across every dimension of the education ecosystem—from leadership development to infrastructure, branding, and beyond.

Our mission is to empower institutions by addressing every critical need under one roof, ensuring seamless integration, quality assurance, and future-readiness. 
Whether you're a school, college, training institute, or educational startup, we offer tailored services that align with national priorities like the NEP 2020 and global best practices.`;

  return (
    <div className="relative  bg-gradient-to-r from-[#A43E27] to-[#D15A39] py-16 px-6 sm:px-12 lg:px-24 shadow-xl overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-white"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-white"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          What is{" "}
          <span className="text-yellow-200">EdVantage 360 Solutions</span>?
        </h2>

        <div
          className={`text-white text-lg leading-relaxed transition-all duration-500 ease-in-out ${
            showFullText ? "max-h-[500px]" : "max-h-24"
          } overflow-hidden`}>
          <p className="whitespace-pre-line">
            {showFullText ? fullText : shortText}
          </p>
        </div>

        <button
          onClick={() => setShowFullText(!showFullText)}
          className="mt-6 inline-flex items-center px-6 py-3 bg-white text-[#A43E27] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
          {showFullText ? (
            <>
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
              Show Less
            </>
          ) : (
            <>
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              Read More
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ShowText;
