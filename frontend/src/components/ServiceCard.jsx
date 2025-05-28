import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Training & Development",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    items: [
      "Leadership Programs for Principals and Coordinators",
      "Mandatory CBSE & NEP 2020 Training for Teachers",
      "Emotional Intelligence & Communication Skills",
      "Personality Development for Students",
    ],
  },
  {
    title: "Audits & Competency Mapping",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    items: [
      "Academic & Financial Audits",
      "Competency Mapping for Performance Enhancement",
    ],
  },
  {
    title: "Infrastructure & Academic Solutions",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    items: [
      "Smart Classrooms & Lab Setup",
      "Curriculum Design",
      "School Furniture & Educational Tools",
    ],
  },
  {
    title: "Excursions & School Amenities",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    items: [
      "Domestic & International Educational Tours",
      "Travel Management Services",
      "Canteen & Hygiene Solutions",
    ],
  },
  {
    title: "Digital Integration",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    items: ["Interactive Panels & Digital Boards", "ICT Lab Setup"],
  },
  {
    title: "Placement & Vocational Support",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    items: [
      "Vocational Training Centers (VTCs)",
      "Career Fairs & Higher Education Connects",
    ],
  },
  {
    title: "Media & Branding",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    items: ["School Promotions & Publications", "Online Presence Management"],
  },
  {
    title: "Recognition & Celebrations",
    image:
      "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    items: ["Awards & Leadership Summits", "Annual Felicitations"],
  },
  {
    title: "Uniforms & Essentials",
    image:
      "https://images.unsplash.com/photo-1592892142579-9ef7d7f5aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    items: ["Tailored School Uniforms", "Procurement of School Kits"],
  },
  {
    title: "Insurance Solutions",
    image:
      "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    items: ["Custom Insurance Plans", "Staff & Student Well-being Coverage"],
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
      <Link
        to="/pricing"
        className="flex  justify-center  mt-5 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
        View Pricing Details
      </Link>
    </div>
  );
};

export default ServiceComponent;
