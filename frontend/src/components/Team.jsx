import React from "react";

const teamMembers = [
  {
    name: "Dr Debolina Sarkar",
    role: "Board Member",
    image: "Deboleena Sarkar.jpg",
    description: "Human Rights Educator ,Guest Faculty, University of Calcutta",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:amit@example.com",
    },
  },
  {
    name: "Dr.Debika Guha",
    role: "Board Member",
    image: "Debika Guha.jpg",
    description:
      "Associate Professor, Department of Education,Loreto College, Kolkata",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:sneha@example.com",
    },
  },
  {
    name: "Hitesh Rana",
    role: "Board Member",
    image: "Hitesh Rana.jpg",
    description:
      " Compliance, Governance & Risk Oversight Expert, Strategic Advisor",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:ravi@example.com",
    },
  },
  {
    name: "Shivam Bose",
    role: "Board Member",
    image: "Shivam Bose.jpg",
    description:
      "LLM Environmental Law ,University of Sydney ,Practising Lawyer Delhi High Court",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:priya@example.com",
    },
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
