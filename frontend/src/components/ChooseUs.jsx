import React from 'react';
import { 
  FaUserShield, 
  FaCogs, 
  FaSchool, 
  FaMedal, 
  FaBalanceScale,
  FaUsers,
  FaLightbulb,
  FaChartLine,FaUserTie,FaGraduationCap,FaShieldAlt 
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUsers className="text-4xl mb-4 text-indigo-600" />,
      title: "Women-Led Leadership",
      description: "Founded and led by experienced women educators with 15+ years in school transformation",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      icon: <FaCogs className="text-4xl mb-4 text-teal-600" />,
      title: "Tailored Solutions",
      description: "Customized programs that scale with your institution's unique needs and growth trajectory",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      icon: <FaSchool className="text-4xl mb-4 text-amber-600" />,
      title: "Operational Expertise",
      description: "Deep-rooted understanding of daily school operations from infrastructure to academic delivery",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      icon: <FaMedal className="text-4xl mb-4 text-blue-600" />,
      title: "Commitment to Excellence",
      description: "Proven track record in elevating schools to international standards of education",
      image: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      icon: <FaUserShield className="text-4xl mb-4 text-green-600" />,
      title: "Full Compliance",
      description: "100% adherence to CBSE, NEP 2020, NABET, POSH, and ISA accreditation requirements",
      image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      icon: <FaLightbulb className="text-4xl mb-4 text-purple-600" />,
      title: "Innovation Focus",
      description: "Pioneers in integrating emotional intelligence with academic curriculum",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Why Choose Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="h-48 overflow-hidden rounded-md">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Impact Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <FaChartLine className="text-3xl mx-auto text-blue-600 mb-2" />
              <p className="text-2xl font-bold">150+</p>
              <p className="text-gray-600">Schools Transformed</p>
            </div>
            <div>
              <FaUserTie className="text-3xl mx-auto text-green-600 mb-2" />
              <p className="text-2xl font-bold">5,000+</p>
              <p className="text-gray-600">Teachers Trained</p>
            </div>
            <div>
              <FaGraduationCap className="text-3xl mx-auto text-purple-600 mb-2" />
              <p className="text-2xl font-bold">92%</p>
              <p className="text-gray-600">Performance Improvement</p>
            </div>
            <div>
              <FaShieldAlt className="text-3xl mx-auto text-amber-600 mb-2" />
              <p className="text-2xl font-bold">100%</p>
              <p className="text-gray-600">Compliance Success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;