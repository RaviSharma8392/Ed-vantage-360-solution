import React from "react";
import { Award, BookOpen, Users, Briefcase, Star } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: "Plaque + Certificate",
      desc: "Schools receive a plaque, certificate, and national recognition on EdVantage 360 platforms.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-yellow-400" />,
      title: "Life Skill Training",
      desc: "Exclusive student life skill training sessions as part of the award recognition.",
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: "NGO Partnerships",
      desc: "Collaboration with NGOs for internships and impactful social service programmes.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-yellow-400" />,
      title: "Career Fairs",
      desc: "Awarded schools gain access to curated career fairs for student growth.",
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      title: "Leadership Training",
      desc: "Special leadership training programmes designed for students of the awarded schools.",
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "EdVantage Global School Summit & Awards 2025",
    description:
      "Celebrating Excellence Beyond Borders. Recognizing schools with Plaque, Certificate, National Recognition, Life Skill Training, NGO Partnerships, Career Fairs, and Leadership Training.",
    eventType: "Education & Awards Summit",
    startDate: "2025-05-10", // replace with actual date
    endDate: "2025-05-12", // replace with actual date
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "New Delhi, India", // update with actual venue
      address: {
        "@type": "PostalAddress",
        streetAddress: "Venue Address Here",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        postalCode: "110001",
        addressCountry: "IN",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "EdVantage 360",
      url: "https://edvantage360.com", // replace with your official site
    },
    offers: {
      "@type": "Offer",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSeO3ylhKM3z9qd9EUJGzo4QxTHcfsSY7y2m3AqVRCfUH28wbA/viewform",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      validFrom: "2025-01-01", // update
    },
  };

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side Trophy Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src="pngtree-trophy-gold-high-quality-png-image_15125965-removebg-preview.png"
              alt="Trophy"
              className="w-72 md:w-[400px] drop-shadow-2xl"
            />
          </div>

          {/* Right Side Benefits */}
          <div>
            <h2 className="text-4xl font-bold mb-12 text-center md:text-left">
              Benefits Of The Awards
            </h2>

            <div className="grid sm:grid-cols-2 gap-8">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="mb-3">{b.icon}</div>
                  <h3 className="text-xl font-semibold mb-1">{b.title}</h3>
                  <p className="text-gray-400 text-sm">{b.desc}</p>
                </div>
              ))}
            </div>

            {/* Combined Benefit Summary */}
            <div className="mt-12 bg-gray-900 p-6 rounded-lg border border-yellow-600 text-sm md:text-base leading-relaxed text-gray-200 shadow-md">
              <p>
                • Plaque + Certificate + Recognition on{" "}
                <span className="text-yellow-400 font-semibold">
                  EdVantage 360 Platforms
                </span>{" "}
                + Life Skill Training Sessions for students + Partnership with
                NGO for students’ internships & Social Impact programmes +
                Career Fairs in the schools + Students Leadership Training for
                the school.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center md:text-left">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeO3ylhKM3z9qd9EUJGzo4QxTHcfsSY7y2m3AqVRCfUH28wbA/viewform"
                className="bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg hover:bg-yellow-400 transition-all">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
