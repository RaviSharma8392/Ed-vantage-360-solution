import React from "react";

const aboutSections = [
  {
    title: "Theme of Transformation",
    desc: `Recognising schools as catalysts of transformation—shaping character, inspiring innovation, and building inclusive, future-ready communities.`,
    img: "/images/trophy2.png",
  },
  {
    title: "Purpose with Heart",
    desc: `EdVantage Global School Summit & Awards 2025 honour schools across the globe that go beyond academics to nurture the holistic growth of students. The awards celebrate institutions that integrate life skills, values, and innovation into education, preparing students not just for exams, but for life.
They recognise schools as change-makers and mentors of change, inspiring students to lead with empathy, integrity, resilience, and responsibility towards society. Through this initiative, GSSA seeks to build a global movement and purpose-driven, value-based education, where marks may fade but values last for life.
✨ This positioning ensures the awards stand not just as a recognition program, but as a movement towards value-based, future-ready education across the globe.
`,
    img: "/images/trophy3.png",
  },
  {
    title: "Award as a Movement",
    desc: `EdVantage Global School Summit & Awards 2025 is more than recognition—it’s a nationwide movement celebrating schools that nurture values, life skills, and innovation, preparing students not just for exams, but for life.`,
    img: "/images/trophy1.png",
  },
  {
    title: "Organisers & NGO",
    desc: `Organised by EdVantage 360 Solutions in partnership with Hope & Care Foundation, this award bridges education, values, and social impact.`,
    img: "/images/trophy4.png",
  },
];

export default function AboutPage() {
  return (
    <section id="about" className="py-20 px-6 bg-black text-gray-200">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          About{" "}
          <span className="text-yellow-400">
            {" "}
            EdVantage Global School Summit{" "}
          </span>
        </h2>
        <p className="text-lg md:text-xl font-[italiyan] text-gray-400 italic mb-2">
          शिक्षा और संस्कार पुरस्कार
        </p>
        <p className="text-xl md:text-2xl font-medium font-[specimen] text-yellow-400">
          “Education with Purpose, Values for Life”
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {aboutSections.map((sec, idx) => (
          <div
            key={idx}
            className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 hover:border-yellow-400 transition-all overflow-hidden">
            <div className="flex flex-col justify-between h-full">
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-yellow-400">
                  {sec.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">{sec.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
