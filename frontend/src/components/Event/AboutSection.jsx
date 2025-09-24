import React from "react";

export default function AboutSection({
  sections,
  mainTitle,
  subTitle,
  tagline,
  newTagLine,
}) {
  return (
    <section id="about" className="py-20 px-6 bg-black text-gray-200">
      <div className="max-w-7xl mx-auto text-center mb-12">
        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          {mainTitle}
        </h2>

        {/* Tagline (separate line, highlighted) */}
        {tagline && (
          <p className="text-xl md:text-2xl font-semibold text-yellow-400 mb-4">
            {tagline}
          </p>
        )}

        <h3 className="text-lg font-semibold mb-3 text-yellow-400">
          {newTagLine}
        </h3>

        {/* Subtitle (italic gray text) */}
        {subTitle && (
          <p className="text-lg md:text-xl font-[italiyan] text-gray-400 italic mb-2">
            {subTitle}
          </p>
        )}
      </div>

      {/* Sections Grid */}
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

                {/* Show description only if website/foundation not present */}
                {!sec.website && !sec.foundation && (
                  <p className="text-gray-300 leading-relaxed">{sec.desc}</p>
                )}

                {(sec.email || sec.phone || sec.website || sec.foundation) && (
                  <div className="mt-4 space-y-1">
                    {sec.email && (
                      <p className="text-gray-300 leading-relaxed">
                        📧 Email:{" "}
                        <a
                          href={`mailto:${sec.email}`}
                          className="hover:text-yellow-400">
                          {sec.email}
                        </a>
                      </p>
                    )}
                    {sec.phone && (
                      <p className="text-gray-300 leading-relaxed">
                        📞 Phone: {sec.phone}
                      </p>
                    )}
                    {sec.website && (
                      <p className="text-gray-300 leading-relaxed">
                        🌐 Website:{" "}
                        <a
                          href={sec.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-yellow-400">
                          {sec.website}
                        </a>
                      </p>
                    )}
                    {sec.foundation && (
                      <p className="text-gray-300 leading-relaxed">
                        🏛 Foundation:{" "}
                        <a
                          href={sec.foundation.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-yellow-400">
                          {sec.foundation.name}
                        </a>
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
