import React, { useState } from 'react';

const ModuleCard2 = ({ module }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categoryColors = {
    pedagogy: 'bg-blue-100 text-blue-800',
    technology: 'bg-purple-100 text-purple-800',
    psychology: 'bg-green-100 text-green-800',
    assessment: 'bg-amber-100 text-amber-800',
    default: 'bg-gray-100 text-gray-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <div className="p-6">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-xl font-bold text-gray-800">{module.title}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${
            categoryColors[module.category] || categoryColors.default
          } whitespace-nowrap`}>
            {module.category.charAt(0).toUpperCase() + module.category.slice(1)}
          </span>
        </div>
        <p className="mt-2 text-gray-600">{module.description}</p>
      </div>

      <div className="border-t border-gray-100 px-6 py-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
          aria-expanded={isExpanded}
        >
          {isExpanded ? (
            <>
              <span>Hide Components</span>
              <svg className="w-4 h-4 transform rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </>
          ) : (
            <>
              <span>Show Components</span>
              <svg className="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </>
          )}
        </button>

        {isExpanded && (
          <div className="mt-4 transition-opacity duration-300 ease-in-out opacity-100">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Components:</h4>
            <ul className="list-disc list-inside space-y-1.5">
              {(module?.components || []).map((item, index) => (
                <li key={index} className="text-sm text-gray-600 pl-1.5">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// Example usage
const ExampleModuleCard = () => {
  return (
    <div className="max-w-md mx-auto p-6">
      <ModuleCard2
        module={{
          title: "ICT Integration",
          description: "Digital tools for effective teaching.",
          category: "technology",
          components: [
            "Google Classroom setup",
            "Blended learning models",
            "Cybersecurity best practices",
            "Interactive whiteboard techniques"
          ]
        }}
      />
    </div>
  );
};

export default ModuleCard2;
// export { ExampleModuleCard }; // Uncomment if needed
