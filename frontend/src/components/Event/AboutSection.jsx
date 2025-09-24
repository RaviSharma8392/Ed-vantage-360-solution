import React from "react";

export default function AboutSection({
  sections,
  mainTitle,
  subTitle,
  tagline,
}) {
  return (
    <section id="about" className="py-20 px-6 bg-black text-gray-200">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          {mainTitle} <span className="text-yellow-400">{tagline}</span>
        </h2>
        {subTitle && (
          <p className="text-lg md:text-xl font-[italiyan] text-gray-400 italic mb-2">
            {subTitle}
          </p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {sections.map((sec, idx) => (
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
