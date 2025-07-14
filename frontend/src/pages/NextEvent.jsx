import React from "react";

const EdVantageWebinar = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-3">
            Educator Exclusive
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-blue-600">EdVantage Insights:</span>{" "}
            Leadership in Transformative Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A hybrid webinar series by our founding partners sharing 30+ years
            of institutional transformation strategies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Webinar Details */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-start mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  The Future of AI in Education
                </h3>
                <p className="text-gray-600">
                  How school leaders can harness AI while preserving pedagogical
                  integrity
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex">
                <svg
                  className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-800">July 28, 2025</p>
                  <p className="text-gray-600 text-sm">3:00 PM - 4:30 PM IST</p>
                </div>
              </div>

              <div className="flex">
                <svg
                  className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-800">Hybrid Event</p>
                  <p className="text-gray-600 text-sm">
                    EdVantage HQ (Bangalore) & Zoom Webinar
                  </p>
                </div>
              </div>

              <div className="flex">
                <svg
                  className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <div>
                  <p className="font-medium text-gray-800">Facilitated By</p>
                  <p className="text-gray-600 text-sm">
                    All 4 Founding Partners
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-bold text-gray-800 mb-3">
                Who Should Attend:
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "School Principals",
                  "Curriculum Heads",
                  "EdTech Coordinators",
                  "Teacher Educators",
                ].map((role, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div>
            <div className="bg-blue-600 rounded-xl p-6 text-white mb-6">
              <h3 className="text-xl font-bold mb-3">Why Join This Webinar?</h3>
              <ul className="space-y-3">
                {[
                  "Get our proprietary 'AI Readiness Assessment' framework",
                  "Case studies from 3 transformed institutions",
                  "Q&A with all four partners",
                  "Networking with peer institutions",
                  "Certificate of participation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="w-4 h-4 mt-1 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                About the Presenters
              </h3>
              <p className="text-gray-600 mb-4">
                Our founding partners bring combined experience from:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "🏆", text: "CBSE Excellence Awards" },
                  { icon: "🌍", text: "International Curriculum Development" },
                  { icon: "📈", text: "100+ School Transformations" },
                  { icon: "👩‍💻", text: "EdTech Integration Specialists" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <span className="text-2xl mr-2">{item.icon}</span>
                    <span className="text-sm text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EdVantageWebinar;
