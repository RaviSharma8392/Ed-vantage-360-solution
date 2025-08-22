import React from "react";

const RegistrationCard = () => {
  return (
    <div
      id="register"
      className=" my-0 mx-auto bg-gradient-to-br from-gray-900 to-black shadow-2xl overflow-hidden   border-yellow-600">
      {/* Header Section */}
      <div className="bg-black p-6 text-center border-b border-yellow-600">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-yellow-400">
          EdVantage Udaan - National Education Awards 2025
        </h1>
        <p className="text-yellow-300 italic">
          "Education with Purpose, Values for Life"
        </p>
      </div>

      <div className="md:flex">
        {/* Left side - Details */}
        <div className="md:w-2/3 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 border-l-4 border-yellow-500 pl-3">
              School Registration
            </h2>
            <p className="text-gray-300 mb-6">
              Join us in recognizing schools that go beyond academics to nurture
              the holistic growth of students. The awards celebrate institutions
              that integrate life skills, values, and innovation into education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-4 rounded-lg shadow-sm border border-yellow-700">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Registration Details
              </h3>
              <p className="text-gray-300 mb-1">
                <span className="font-medium text-yellow-300">Fee:</span>{" "}
                ₹11,000 per school
              </p>
              <p className="text-gray-300 mb-1">
                <span className="font-medium text-yellow-300">
                  Registration Deadline:
                </span>{" "}
                15th September 2025
              </p>
              <p className="text-gray-300">
                <span className="font-medium text-yellow-300">
                  Submission Deadline:
                </span>{" "}
                25th September 2025
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg shadow-sm border border-yellow-700">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                    clipRule="evenodd"
                  />
                </svg>
                Awards Ceremony
              </h3>
              <p className="text-gray-300 mb-1">
                <span className="font-medium text-yellow-300">Date:</span> 26th
                October 2025
              </p>
              <p className="text-gray-300">
                <span className="font-medium text-yellow-300">Venues:</span>{" "}
                Delhi, Varanasi, Faridabad, Noida, Bhopal, Kolkata, Aligarh
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3 border-b border-yellow-700 pb-2">
              Submission Requirements
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Statement of Purpose (max 500 words)
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Evidence of Achievement (photos, certificates, videos,
                testimonials)
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                Project reports and details of NGO internships
              </li>
            </ul>
          </div>

          <div className="bg-yellow-900 bg-opacity-20 border-l-4 border-yellow-500 p-4 mb-6">
            <p className="text-yellow-300 flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-yellow-500 flex-shrink-0 mt-0.5"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                <span className="font-bold">Note:</span> Payment confirmation
                must be uploaded along with the Google Form submission.
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://forms.gle/BfuSZkmqVTYWknby8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-yellow-600 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-300 shadow-md">
              Register via Google Form
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="mailto:edvantage360.info@gmail.com"
              className="flex items-center justify-center px-6 py-3 border border-yellow-600 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-900 hover:bg-opacity-20 transition-colors duration-300">
              Contact for Queries
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right side - QR Code for Payment */}
        <div className="md:w-1/3 bg-black p-8 flex flex-col items-center justify-center text-white border-l border-yellow-600">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center p-2 bg-yellow-500 rounded-full mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-900"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-yellow-400">
              Payment QR Code
            </h3>
            <p className="text-yellow-200">Scan to complete payment</p>
          </div>

          <div className="bg-gray-800 p-5 rounded-xl shadow-lg mb-6 border border-yellow-700">
            <div className="p-2 rounded">
              <img
                src="/qr.png"
                alt="My Image"
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-yellow-200 mb-2">After payment, register at:</p>
            <p className="font-mono text-sm bg-gray-900 p-2 rounded break-all text-yellow-300 border border-yellow-800">
              https://forms.gle/BfuSZkmqVTYWknby8
            </p>
          </div>

          <div className="mt-8 bg-gray-900 p-4 rounded-lg text-center border border-yellow-700">
            <h4 className="font-semibold mb-2 text-yellow-400">
              Organized by:
            </h4>
            <p className="text-sm text-gray-300">EdVantage 360 Solutions &</p>
            <p className="text-sm text-gray-300">Hope & Care Foundation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationCard;
