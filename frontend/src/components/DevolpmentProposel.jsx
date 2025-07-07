import React from "react";
import {
  FaShieldAlt,
  FaGraduationCap,
  FaChartLine,
  FaUserTie,
  FaHandsHelping,
  FaLightbulb,
} from "react-icons/fa";

const UniqueAdvantage = () => {
  const strengths = [
    {
      icon: (
        <FaUserTie className="w-12 h-12 p-2 rounded-full bg-indigo-100 text-indigo-600" />
      ),
      title: "Women-Led Expertise",
      description:
        "Founded by former principals with 15+ years of hands-on school leadership experience",
      stat: "150+ Schools Transformed",
    },
    {
      icon: (
        <FaShieldAlt className="w-12 h-12 p-2 rounded-full bg-blue-100 text-blue-600" />
      ),
      title: "Full Compliance Guarantee",
      description:
        "100% adherence to CBSE, NEP 2020, NABET, and POSH training requirements",
      stat: "0 Compliance Violations",
    },
    {
      icon: (
        <FaChartLine className="w-12 h-12 p-2 rounded-full bg-green-100 text-green-600" />
      ),
      title: "Proven Impact",
      description:
        "Documented improvement in teaching effectiveness within 3 months",
      stat: "92% Success Rate",
    },
    {
      icon: (
        <FaLightbulb className="w-12 h-12 p-2 rounded-full bg-amber-100 text-amber-600" />
      ),
      title: "Innovative Pedagogy",
      description:
        "Blended learning models combining AI tools with emotional intelligence training",
      stat: "18 Patented Methods",
    },
    {
      icon: (
        <FaHandsHelping className="w-12 h-12 p-2 rounded-full bg-purple-100 text-purple-600" />
      ),
      title: "End-to-End Support",
      description:
        "From needs assessment to certification - we handle all training logistics",
      stat: "24/7 Mentor Access",
    },
  ];

  return (
    <section className="pb-16 bg-white">
      <div className="mb-3 ml-1.5 mr-1.5 bg-white p-8 rounded-xl shadow-md border border-blue-500">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          Our Impact Metrics
        </h3>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline with Badge */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
            THE EDVANTAGE DIFFERENCE
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Leading Schools Choose Us
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Not just trainers - we're strategic partners in your institution's
            growth journey
          </p>
        </div>

        {/* Value Grid with Visual Separator */}
        <div className="relative">
          {/* Vertical Decorative Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Visual Proof */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-inner flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  By The Numbers
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-5xl font-bold text-blue-600 mr-4">
                      10K+
                    </div>
                    <div className="text-gray-600 mt-2">
                      Teachers trained since 2025
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-5xl font-bold text-green-600 mr-4">
                      100%
                    </div>
                    <div className="text-gray-600 mt-2">
                      CBSE audit compliance rate
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Featured In
                </h3>
                <div className="flex flex-wrap gap-6 items-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/The_Times_of_India_logo.svg/1200px-The_Times_of_India_logo.svg.png"
                    alt="Times of India"
                    className="h-10 object-contain opacity-80"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Doordarshan_logo.svg/1200px-Doordarshan_logo.svg.png"
                    alt="Doordarshan"
                    className="h-10 object-contain opacity-80"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Centre_of_Excellence_logo.png/640px-Centre_of_Excellence_logo.png"
                    alt="Centre of Excellence"
                    className="h-10 object-contain opacity-80"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Value Propositions */}
            <div className="space-y-8">
              {strengths.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start p-4 hover:bg-gray-50 rounded-xl transition-all">
                  <div className="mr-6">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <span className="inline-block text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {item.stat}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="text-xl italic mb-6">
              "EdVantage 360° Solutions didn't just train our teachers - they
              transformed our entire pedagogical approach. Our NEP 2020
              transition was seamless thanks to their customized roadmap."
            </p>
            <footer className="font-semibold">
              — Dr. Priya Sharma, Principal at Delhi Public School (CBSE
              Exemplar School)
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default UniqueAdvantage;
