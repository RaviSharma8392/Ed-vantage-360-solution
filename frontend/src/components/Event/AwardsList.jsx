import React from "react";

const EventAward = ({ data }) => {
  return (
    <section
      id={data.sectionId || "awards"}
      className="bg-black text-gray-100 py-20 px-6">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-2xl font-extrabold mb-4 text-yellow-400">
          {data.header.title}
        </h1>
        {data.header.subtitle && (
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {data.header.subtitle}
          </p>
        )}
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-6"></div>
      </div>

      {/* Categories */}
      <div className="grid gap-12 max-w-6xl mx-auto">
        {data.categories.map((category, idx) => (
          <div
            key={idx}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
            {/* Category Title */}
            <h2 className="text-xl font-bold text-yellow-400 flex items-center mb-4">
              <span className="mr-2">🏆</span> {category.title}
            </h2>

            {/* Awards List */}
            <ul className="space-y-2">
              {category.awards.map((award, i) => (
                <li
                  key={i}
                  className="flex items-start bg-gray-800 rounded-lg p-3 border border-gray-700 hover:border-yellow-500 transition-colors">
                  <span className="text-yellow-500 font-semibold mr-3">
                    {i + 1}.
                  </span>
                  <span className="text-gray-200">{award}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventAward;
