import React from "react";

const RegistrationCard = ({ data }) => {
  return (
    <div
      id="register"
      className="my-0 mx-auto bg-gradient-to-br from-gray-900 to-black shadow-2xl overflow-hidden border-yellow-600">
      {/* Header */}
      <div className="bg-black p-6 text-center border-b border-yellow-600">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-yellow-400">
          {data.header.title}
        </h1>
        <p className="text-yellow-300 italic">{data.header.tagline}</p>
      </div>

      <div className="md:flex">
        {/* Left side */}
        <div className="md:w-2/3 p-8">
          {/* Registration Info */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 border-l-4 border-yellow-500 pl-3">
              {data.registration.sectionTitle}
            </h2>
            <p className="text-gray-300 mb-6">
              {data.registration.description}
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Registration details */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-sm border border-yellow-700">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                {data.registration.detailsTitle}
              </h3>
              <p className="text-gray-300 mb-1">
                <span className="font-medium text-yellow-300">Fee:</span>{" "}
                {data.registration.fee}
              </p>
              <p className="text-gray-300 mb-1">
                <span className="font-medium text-yellow-300">
                  Registration Deadline:
                </span>{" "}
                {data.registration.registrationDeadline}
              </p>
              <p className="text-gray-300">
                <span className="font-medium text-yellow-300">
                  Submission Deadline:
                </span>{" "}
                {data.registration.submissionDeadline}
              </p>
            </div>

            {/* Awards details */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-sm border border-yellow-700">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                {data.awards.title}
              </h3>
              <p className="text-gray-300 mb-1">
                <span className="font-medium text-yellow-300">Date:</span>{" "}
                {data.awards.date}
              </p>
              <p className="text-gray-300 grid">
                <span className="font-medium text-yellow-300">Venues:</span>{" "}
                {data.awards.venues.join(", ")}
                <span className="text-yellow-300">{data.awards.note}</span>
              </p>
            </div>
          </div>

          {/* Submission */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3 border-b border-yellow-700 pb-2">
              {data.submission.title}
            </h3>
            <ul className="text-gray-300 space-y-2">
              {data.submission.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Note */}
          <div className="bg-yellow-900 bg-opacity-20 border-l-4 border-yellow-500 p-4 mb-6">
            <p className="text-yellow-300 flex items-start">
              <span>
                <span className="font-bold">Note:</span> {data.note}
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={data.links.form}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-yellow-600 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-300 shadow-md">
              {data.links.formText}
            </a>

            <a
              href={`mailto:${data.links.contact}`}
              className="flex items-center justify-center px-6 py-3 border border-yellow-600 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-900 hover:bg-opacity-20 transition-colors duration-300">
              {data.links.contactText}
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="md:w-1/3 bg-black p-8 flex flex-col items-center justify-start text-white border-l border-yellow-600">
          {/* QR */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold mb-2 text-yellow-400">
              {data.payment.title}
            </h3>
            <p className="text-yellow-200">{data.payment.subtitle}</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-xl shadow-lg mb-8 border border-yellow-700">
            <img
              src={data.payment.qrSrc}
              alt="Payment QR"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* NEFT */}
          <div className="bg-gray-900 p-5 rounded-lg w-full border border-yellow-700 mb-8">
            <h4 className="text-lg font-semibold mb-3 text-yellow-400">
              {data.neft.title}
            </h4>
            <ul className="text-sm text-gray-300 space-y-1">
              {Object.entries(data.neft.details).map(([key, value], i) => (
                <li key={i}>
                  <span className="font-medium text-yellow-300">{key}:</span>{" "}
                  {value}
                </li>
              ))}
            </ul>
          </div>

          {/* Venue */}
          <div className="bg-gray-900 p-5 rounded-lg w-full border border-yellow-700">
            <h4 className="text-lg font-semibold mb-3 text-yellow-400">
              {data.venues.title}
            </h4>
            {data.venues.items.map((venue, i) => (
              <p key={i} className="text-sm text-gray-300 mb-2">
                • {venue}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationCard;
