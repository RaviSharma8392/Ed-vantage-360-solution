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

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side Trophy Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="pngtree-trophy-gold-high-quality-png-image_15125965-removebg-preview.png" // Put your trophy image in public folder
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
  );
}
