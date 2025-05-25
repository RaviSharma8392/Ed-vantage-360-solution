import { motion } from "framer-motion";

const services = [
  {
    title: "Training & Development",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    items: [
      "Leadership Training",
      "Teacher Training",
      "Student Training",
      "Life Skills Development",
    ],
  },
  {
    title: "Audits",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    items: ["Academic Audits", "Financial Audits"],
  },
  {
    title: "Competency Mapping",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    items: ["Skill Gap Analysis", "Performance Assessment"],
  },
  {
    title: "Infrastructure Support",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    items: ["Furniture", "Printing", "Facility Setup"],
  },
  {
    title: "Excursions & Amenities",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    items: ["Educational Tours", "Travel Services", "Canteen Management"],
  },
  {
    title: "Smart Solutions",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    items: ["Digital Classrooms", "Smart Panels"],
  },
  {
    title: "Laboratory & Academic Support",
    image:
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a9e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    items: ["Classroom Setup", "Course Development", "Lab Design"],
  },
  {
    title: "Procurement Support",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    items: ["Placement Fairs", "Vocational Training Centres (VTCs)"],
  },
  {
    title: "Media & Branding Solutions",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    items: ["Brand Strategy", "Content Creation", "With Brain House"],
  },
  {
    title: "Recognition & Growth",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    items: ["Awards", "Certifications", "Educational Summits"],
  },
  {
    title: "Insurance Services",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    items: ["Student Insurance", "Staff Coverage"],
  },
  {
    title: "Uniforms & School Essentials",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    items: ["Custom Uniforms", "Stationery Kits"],
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const ServiceComponent = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          Our Services
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Cutting-edge solutions tailored to your business needs
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="rounded-2xl shadow-xl bg-white overflow-hidden flex flex-col h-full cursor-pointer border border-gray-100 hover:border-indigo-100"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{
              y: -10,
              boxShadow:
                "0 20px 25px -5px rgba(99, 102, 241, 0.1), 0 10px 10px -5px rgba(99, 102, 241, 0.04)",
            }}
            transition={{ type: "spring", stiffness: 400 }}>
            {service.image && (
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent z-10" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            )}

            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                {service.title}
              </h3>

              <ul className="space-y-3 flex-grow mb-6">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-indigo-600"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="ml-3 text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              {/* <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-auto w-full py-3 px-6 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all duration-300">
                Learn More
              </motion.button> */}
            </div>
          </motion.div>
        ))}
      </div>

      {/* <div className="mt-16 text-center">
        <button className="px-8 py-3 border border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-colors duration-300">
          View All Services
        </button>
      </div> */}
    </div>
  );
};

export default ServiceComponent;
