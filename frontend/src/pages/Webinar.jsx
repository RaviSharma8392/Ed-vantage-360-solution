import React from "react";

const CompletedWebinars = () => {
  const phoneNumber = "918700356606";
  const message = encodeURIComponent(
    "Hey! I saw your website and I’d love to know more about your future webinars. How can I stay updated or register?"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const webinars = [
    {
      id: 1,
      title:
        "Live Demonstration on Plagiarism Checking and Manual Removing Process",
      date: "July 7, 2025",
      time: "4:00 PM IST",
      location: "Zoom (Online)",
      speaker: "EdVantage 360 Solutions",
      description:
        "A practical walkthrough of tools and strategies to detect and manually eliminate plagiarism from academic writing.",
      zoomLink:
        "https://us02web.zoom.us/j/88134328850?pwd=jMLE2p55JBOVoYs3ojWbJW8Nj03paG.1",
      meetingID: "881 3432 8850",
      passcode: "476629",
    },
    {
      id: 2,
      title:
        "International Webinar on Manuscript Drafting by Ethical Application of AI GPT and Research Software",
      date: "July 7, 2025",
      time: "6:55 PM IST",
      location: "Zoom (Online)",
      speaker: "EdVantage 360 Solutions",
      description:
        "Guidance on drafting research papers using AI tools like GPT and maintaining ethical standards.",
      zoomLink:
        "https://us02web.zoom.us/j/85213620020?pwd=bgFO4gOl4P0lFy8NrW0hwlkOFBzvz8.1",
      meetingID: "852 1362 0020",
      passcode: "351344",
    },
    {
      id: 3,
      title:
        "International Webinar on Navigating the Free Publication Process in Reputed Journals",
      date: "July 9, 2025",
      time: "6:55 PM IST",
      location: "Zoom (Online)",
      speaker: "EdVantage 360 Solutions",
      description:
        "Tips and steps to publish your research without fees in reputed academic journals.",
      zoomLink:
        "https://us02web.zoom.us/j/81402936354?pwd=erEVy1eYlahzKDMxtJP3M2Ib21PQRb.1",
      meetingID: "814 0293 6354",
      passcode: "841643",
    },
    {
      id: 4,
      title: "The Future of AI: Trends and Opportunities",
      date: "July 9, 2025",
      time: "11:00 AM – 1:00 PM",
      location: "Zoom (Online)",
      speaker: "World Reach Fellow of London Prof. Surbhala Paikaray",
      description:
        "Explored cutting-edge developments in AI technology and their practical applications across industries.",
      zoomLink: "https://example.com/random-link",
      meetingID: "123 4567 8901",
      passcode: "999999",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="mx-auto px-4" style={{ maxWidth: "100%" }}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Completed Webinars
          </h2>
          <p className="text-gray-600 mt-2">
            Knowledge-sharing events that shaped educational transformation
          </p>
        </div>

        <div
          className={`grid ${
            webinars.length > 1 ? "lg:grid-cols-2" : "lg:grid-cols-1"
          } gap-8`}>
          {webinars.map((webinar) => (
            <div
              key={webinar.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium mb-3">
                      Webinar Recap
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {webinar.title}
                    </h3>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Completed
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{webinar.description}</p>

                <div className="space-y-4 text-sm text-gray-700">
                  <p>
                    <strong>Date:</strong> {webinar.date}
                  </p>
                  <p>
                    <strong>Time:</strong> {webinar.time}
                  </p>
                  <p>
                    <strong>Location:</strong> {webinar.location}
                  </p>
                  <p>
                    <strong>Speaker:</strong> {webinar.speaker}
                  </p>
                  {webinar.zoomLink && (
                    <>
                      <p>
                        <strong>Zoom Link:</strong>{" "}
                        <a
                          href={webinar.zoomLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline">
                          Join Meeting
                        </a>
                      </p>
                      <p>
                        <strong>Meeting ID:</strong> {webinar.meetingID}
                      </p>
                      <p>
                        <strong>Passcode:</strong> {webinar.passcode}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">
            Stay Updated on Future Events
          </h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Join our mailing list to receive invitations to upcoming webinars
            and educational resources
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Subscribe To Updates
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompletedWebinars;
