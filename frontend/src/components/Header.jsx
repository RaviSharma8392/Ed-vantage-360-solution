// import { useState, useEffect, useRef } from "react";

// const Header = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const intervalRef = useRef(null);

//   // School-related images (replace with your actual high-quality images)
//   const images = [
//     "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", // School building
//     "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80", // Classroom
//     "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80", // Students in lab
//     "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80", // Graduation
//   ];

//   // Auto-advance carousel with 6 second interval
//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 6000);

//     return () => clearInterval(intervalRef.current);
//   }, [images.length]);

//   const goToSlide = (index) => {
//     clearInterval(intervalRef.current);
//     setCurrentIndex(index);
//     // Restart auto-advance after manual navigation
//     intervalRef.current = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 6000);
//   };

//   return (
//     <div className="relative w-full h-screen max-h-[800px] overflow-hidden group">
//       {/* Carousel Slides with Zoom Effect */}
//       <div className="relative w-full h-full">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               index === currentIndex
//                 ? "opacity-100"
//                 : "opacity-0 pointer-events-none"
//             }`}>
//             <img
//               src={image}
//               alt={`School Campus ${index + 1}`}
//               className={`w-full h-full object-cover transform transition-all duration-1000 ease-[cubic-bezier(0.2,0.6,0.2,1)] ${
//                 index === currentIndex ? "scale-105" : "scale-100"
//               }`}
//               loading={index === 0 ? "eager" : "lazy"}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
//           </div>
//         ))}
//       </div>

//       {/* Content Container - Same as original */}
//       <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
//         <div className="max-w-4xl space-y-6 translate-y-10 group-hover:translate-y-0 transition-transform duration-700 ease-out">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
//             <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500 pb-2">
//               Empowering Education
//             </span>
//           </h1>

//           <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light">
//             Transforming Futures with Innovation and Excellence
//           </p>

//           <div className="pt-6">
//             <button className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2">
//               Explore Our Programs
//             </button>
//           </div>
//         </div>

//         {/* Navigation Dots - Customized to match your theme */}
//         <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentIndex
//                   ? "bg-orange-400 w-6"
//                   : "bg-white/50 hover:bg-white/70"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Scrolling Indicator - Same as original */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
//             <div className="w-1 h-2 bg-orange-400 rounded-full mt-2 animate-scroll"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
import { motion } from "framer-motion";

import React from "react";

const Header = () => {
  return (
    <div className="bg-[#fcd2b0] flex items-center justify-center min-h-screen p-4">
      <div className="text-center max-w-xl">
        <img
          src="LOGO[1].png"
          alt="EdVantage 360 SolutionsLogo"
          className="mx-auto mb-6 w-60 rounded-full shadow-lg border border-orange-400"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl font-semibold">
          {" "}
          <h1 className="text-xl font-semibold italic scale-3d mb-2 text-gray-800">
            Empowering Educators, Enriching Classrooms!
          </h1>
          <h1 className="text-lg italic text-gray-800">
            Transforming Teaching for Tomorrow’s Learners!
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
