import React from "react";

const RegistrationCard = () => {
  return (
    <div
      id="register"
      className="my-0 mx-auto bg-gradient-to-br from-gray-900 to-black shadow-2xl overflow-hidden border-yellow-600">
      {/* Header Section */}
      <div className="bg-black p-6 text-center border-b border-yellow-600">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-yellow-400">
          EdVantage Global School Summit & Awards 2025
        </h1>
        <p className="text-yellow-300 italic">
          "Education with Purpose, Values for Life"
        </p>
      </div>

      <div className="md:flex">
        {/* Left side - Details */}
        <div className="md:w-2/3 p-8">
          {/* Registration Info */}
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

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-4 rounded-lg shadow-sm border border-yellow-700">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2 flex items-center">
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
                25th September 2025
              </p>
              <p className="text-gray-300">
                <span className="font-medium text-yellow-300">
                  Submission Deadline:
                </span>{" "}
                30th September 2025
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg shadow-sm border border-yellow-700">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2 flex items-center">
                Awards Ceremony
              </h3>
              <p className="text-gray-300 mb-1">
                <span className="font-medium text-yellow-300">Date:</span> 26th
                October 2025
              </p>
              <p className="text-gray-300 grid">
                <span className="font-medium text-yellow-300">Venues:</span> New
                Delhi, Abu Dhabi
                <span className="text-yellow-300">
                  Charges Applicable (The charges for Abu Dhabi will be
                  mentioned after receiving the form)
                </span>
              </p>
            </div>
          </div>

          {/* Submission */}
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

          {/* Note */}
          <div className="bg-yellow-900 bg-opacity-20 border-l-4 border-yellow-500 p-4 mb-6">
            <p className="text-yellow-300 flex items-start">
              <span>
                <span className="font-bold">Note:</span> Payment confirmation
                must be uploaded along with the Google Form submission.
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://forms.gle/BfuSZkmqVTYWknby8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-yellow-600 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-300 shadow-md">
              Register via Google Form
            </a>

            <a
              href="mailto:edvantage360.info@gmail.com"
              className="flex items-center justify-center px-6 py-3 border border-yellow-600 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-900 hover:bg-opacity-20 transition-colors duration-300">
              Contact for Queries
            </a>
          </div>
        </div>

        {/* Right side - Payment & NEFT */}
        <div className="md:w-1/3 bg-black p-8 flex flex-col items-center justify-start text-white border-l border-yellow-600">
          {/* QR Code */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold mb-2 text-yellow-400">
              Payment QR Code
            </h3>
            <p className="text-yellow-200">Scan to complete payment</p>
          </div>

          <div className="bg-gray-800 p-5 rounded-xl shadow-lg mb-8 border border-yellow-700">
            <img
              src="/qr.png"
              alt="Payment QR"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* NEFT Details */}
          <div className="bg-gray-900 p-5 rounded-lg w-full border border-yellow-700 mb-8">
            <h4 className="text-lg font-semibold mb-3 text-yellow-400">
              NEFT Details
            </h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>
                <span className="font-medium text-yellow-300">Bank:</span> Bank
                of Baroda
              </li>
              <li>
                <span className="font-medium text-yellow-300">Account No:</span>{" "}
                96250200001416
              </li>
              <li>
                <span className="font-medium text-yellow-300">
                  Account Holder:
                </span>{" "}
                EDVANTAGE 360 SOLUTIONS
              </li>
              <li>
                <span className="font-medium text-yellow-300">IFSC:</span>{" "}
                BARB0DBBAHA
              </li>
            </ul>
          </div>

          {/* Venue Notes */}
          <div className="bg-gray-900 p-5 rounded-lg w-full border border-yellow-700">
            <h4 className="text-lg font-semibold mb-3 text-yellow-400">
              Venue Details
            </h4>
            <p className="text-sm text-gray-300 mb-2">• New Delhi</p>
            <p className="text-sm text-gray-300">
              • Abu Dhabi —{" "}
              <span className="text-yellow-300">
                Charges Applicable (The charges for Abu Dhabi will be mentioned
                after receiving the form)
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationCard;
