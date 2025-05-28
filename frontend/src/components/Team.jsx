import React from "react";

const teamMembers = [
  {
    name: "Ravi Sharma",
    role: "Founder & CEO",
    image: "https://a0.muscache.com/im/pictures/user/User/original/d2aae0b5-4930-463b-aab8-f76a13864fa7.jpeg?im_w=240",
    description: "Visionary leader driving innovation and strategy.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:ravi@example.com"
    }
  },
  {
    name: "Priya Mehta",
    role: "Academic Head",
    image: "data:image/jpeg;base64,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",
    description: "Leading curriculum development and teacher training.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:priya@example.com"
    }
  },
  {
    name: "Amit Verma",
    role: "Tech Lead",
    image: "data:image/jpeg;base64,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",
    description: "Manages digital transformation and IT solutions.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:amit@example.com"
    }
  },
  {
    name: "Sneha Kapoor",
    role: "Marketing Head",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqOVmpOVvl_2YcqNnpg-k3Y2jmm0doch84hQ&s",
    description: "Oversees branding, outreach, and partnerships.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:sneha@example.com"
    }
  },
];

const Team = () => {
  return (
    <section className="max-w-7xl md:mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          The passionate professionals driving our success
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-4 border-green-100"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-green-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 mb-4">{member.description}</p>

              <div className="flex justify-center space-x-3">
                <a
                  href={member.social.linkedin}
                  aria-label={`${member.name}'s LinkedIn`}
                  className="text-gray-500 hover:text-green-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href={member.social.twitter}
                  aria-label={`${member.name}'s Twitter`}
                  className="text-gray-500 hover:text-green-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href={member.social.email}
                  aria-label={`Email ${member.name}`}
                  className="text-gray-500 hover:text-green-600 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;