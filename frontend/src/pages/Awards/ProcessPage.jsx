import React from "react";

export default function ProcessPage() {
  const timeline = [
    {
      title: "Registration with Fee Payment",
      date: "25th September 2025",
      desc: "Schools must register through the Google Form and submit the registration fee of ₹11,000 per school.",
    },
    {
      title: "Project Submission Deadline",
      date: "30th September 2025",
      desc: "Submit documentation and evidence of initiatives carried out in the last two years to edvantage360.info@gmail.com.",
    },
    {
      title: "Jury Review",
      date: "1st – 15th October 2025",
      desc: "A panel of educators, life skill coaches, counsellors, and NGO leaders will evaluate the submissions.",
    },
    {
      title: "Finalists Announcement",
      date: "15th October 2025",
      desc: "Shortlisted schools will be announced and invited for the award ceremony.",
    },
    {
      title: "Award Ceremony",
      date: "26th October 2025",
      // desc: "Award function held across Delhi, Varanasi, Faridabad, Noida, Bhopal, Kolkata, and Aligarh.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center text-yellow-400">
          Award Process & Timeline
        </h2>

        <div className="relative">
          {/* Vertical Line (progress bar background) */}
          <div className="absolute left-6 top-0 h-full w-1 bg-gray-700"></div>

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div key={i} className="relative flex items-start">
                {/* Step Circle */}
                <div className="relative z-10">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 border-4 border-yellow-500 shadow-lg">
                    <span className="text-yellow-400 font-bold">{i + 1}</span>
                  </span>
                  {/* Connector line */}
                  {i < timeline.length - 1 && (
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-500 to-gray-700"></div>
                  )}
                </div>

                {/* Step Content */}
                <div className="ml-8">
                  <h3 className="text-2xl font-semibold text-yellow-400">
                    {item.title}
                  </h3>
                  <p className="text-lg font-medium text-gray-200">
                    {item.date}
                  </p>
                  <p className="text-gray-400 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
