// import React, { useState } from 'react';

// const ModuleCard = ({ module }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   // Category color mapping
//   const categoryColors = {
//     pedagogy: 'bg-blue-100 text-blue-800',
//     technology: 'bg-purple-100 text-purple-800',
//     psychology: 'bg-green-100 text-green-800',
//     default: 'bg-gray-100 text-gray-800',
//   };

//   const categoryLabel = module.category
//     ? module.category.charAt(0).toUpperCase() + module.category.slice(1)
//     : 'Uncategorized';

//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
//       {/* Card Header */}
//       <div className="p-6">
//         <div className="flex justify-between items-start">
//           <h3 className="text-xl font-bold text-gray-800">{module.title}</h3>
//           <span
//             className={`text-xs px-2 py-1 rounded-full ${
//               categoryColors[module.category] || categoryColors.default
//             }`}
//           >
//             {categoryLabel}
//           </span>
//         </div>
//         <p className="mt-2 text-gray-600">{module.description}</p>
//       </div>

//       {/* Expandable Section */}
//       <div className="border-t border-gray-100 px-6 py-4">
//         <button
//           onClick={() => setIsExpanded(!isExpanded)}
//           className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
//         >
//           {isExpanded ? (
//             <>
//               <span>Hide Components</span>
//               <svg
//                 className="w-4 h-4 ml-1"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M5 15l7-7 7 7"
//                 />
//               </svg>
//             </>
//           ) : (
//             <>
//               <span>Show Components</span>
//               <svg
//                 className="w-4 h-4 ml-1"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </>
//           )}
//         </button>

//         {isExpanded && module?.components?.length > 0 && (
//           <div className="mt-4 pl-4">
//             <h4 className="text-sm font-semibold text-gray-700 mb-2">
//               Key Components:
//             </h4>
//             <ul className="list-disc list-inside space-y-1 text-gray-600">
//               {module.components.map((item, index) => (
//                 <li key={index} className="text-sm">{item}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ModuleCard;
