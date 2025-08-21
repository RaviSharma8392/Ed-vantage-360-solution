import React, { useState } from "react";

const awards = [
  "EdVantage Life Skills Excellence School Award – Shaping Students for Life, Not Just Exams",
  "EdVantage Community Impact School Award – Educating Beyond Classrooms",
  "EdVantage Innovation in Education Award – Teaching with a Difference",
  "EdVantage Holistic Development Champion Award – Balancing Mind, Body & Soul",
  "EdVantage Best Mentorship & Guidance School Award – Guiding the Path to Greatness",
  "EdVantage Sustainable Development Champion Award – Building a Better Tomorrow Today",
  "EdVantage Green School Award – Learning in Harmony with Nature",
  "EdVantage Social Service Leadership Award – Service Above Self",
  "EdVantage Digital Learning Excellence Award – Empowering Students in the Digital Age",
  "EdVantage Cultural Heritage & Values Award – Rooted in Tradition, Ready for the Future",
  "EdVantage Student Well-being & Inclusion Award – A School for Every Child.",
  "EdVantage Value Education Excellence Award – Instilling Ethics & Morals for Life",
  "EdVantage Emotional Intelligence Champion Award – Nurturing Hearts, Not Just Minds",
  "EdVantage Global Citizenship School Award – Preparing Students for the World Stage",
  "EdVantage Health & Fitness Excellence Award – Strong Bodies, Strong Minds",
  "EdVantage Safety & Security Excellence Award – Ensuring Safe Havens for Learning",
  "EdVantage Innovative Co-Curricular Integration Award – Blending Learning Beyond Books",
  "EdVantage Teacher Empowerment Award – Strengthening Educators, Enriching Futures",
  "EdVantage Parental Engagement Excellence Award – Building Strong School-Home Partnerships",
  "EdVantage Inclusive Growth Award – Leaving No Child Behind",
];

export default function EventAward() {
  const [showAll, setShowAll] = useState(false);

  // Limit to first 5 unless expanded
  const visibleAwards = showAll ? awards : awards.slice(0, 5);

  return (
    <section id="awards" className="bg-black text-gray-100 py-20 px-6">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-extrabold mb-4 text-yellow-400">
          EdVantage School Awards 2025
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Honoring schools that inspire transformation, nurture innovation, and
          build future-ready communities across India.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-6"></div>
      </div>

      {/* Awards Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {visibleAwards.map((award, index) => {
          const [title, desc] = award.split("–");
          return (
            <div
              key={index}
              className="relative bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-2 transition-all group">
              {/* Badge Number */}
              <div className="absolute -top-4 -left-4 bg-yellow-500 text-black font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                {index + 1}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-yellow-300 mb-2 group-hover:text-yellow-400 transition-colors">
                {title.trim()}
              </h3>
              <p className="text-gray-400 text-sm">{desc?.trim()}</p>
            </div>
          );
        })}
      </div>

      {/* Toggle Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition-all shadow-lg">
          {showAll ? "See Less" : "See More"}
        </button>
      </div>
    </section>
  );
}
