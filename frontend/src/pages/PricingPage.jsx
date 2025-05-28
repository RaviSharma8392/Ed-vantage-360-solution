import React from 'react';
import { Link, Links } from 'react-router-dom';

const PricingPage = () => {
    const phoneNumber = "8168084274"; // Replace with your number (include country code if needed)
  const message = encodeURIComponent(
    "Hi, I would like to request a proposal for..."
  );
    const messageForShedule = 'Hello, I would like to schedule a visit. Please share the available slots.';


  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  const whatsappUrlForShedule=`https://wa.me/${phoneNumber}?text=${messageForShedule}`;
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Educator Training Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional development sessions led by certified experts to empower your teaching staff
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Online Training Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-[1.02] hover:shadow-xl">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
              <h2 className="text-2xl font-bold text-white">Online Training</h2>
              <p className="text-blue-100">Virtual interactive sessions</p>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">₹100</span>
                <span className="text-gray-600"> /teacher/hour</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>50+ teachers: ₹100 per teacher/hour</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Smaller groups: ₹200 per teacher/hour</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Flexible scheduling</span>
                </li>
              </ul>
              <button    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200">
              <Link to="/contact">Enquire Now</Link> 
              </button>
            </div>
          </div>

          {/* Offline Training Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-[1.02] hover:shadow-xl">
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-6">
              <h2 className="text-2xl font-bold text-white">On-Site Training</h2>
              <p className="text-teal-100">In-person workshops at your institution</p>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">₹25,000</span>
                <span className="text-gray-600"> /day (5 hours)</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Full-day intensive sessions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Hands-on activities</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Travel expenses arranged by host</span>
                </li>
              </ul>
              <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200">
                 <Link to="/contact">Schedule Visit</Link>  
              </button>
            </div>
          </div>
        </div>

        {/* Customization Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Custom Training Solutions</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
            We tailor each program to your institution's specific needs, focusing on your priority areas for professional development.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {['Curriculum Alignment', 'Teaching Methodologies', 'Assessment Strategies'].map((item) => (
              <div key={item} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">{item}</h3>
                <p className="text-gray-600">Customized approaches to enhance {item.toLowerCase()}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-xl p-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Empower Your Educators?</h2>
            <p className="text-blue-100 mb-6 text-lg">
              Contact us today to discuss a training program tailored for your school's needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition duration-200">
                 <a href={whatsappUrl}
              target="_blank">Request Proposal</a>  
              </button>
              <button className="border-2 border-white text-white hover:bg-blue-800 font-medium py-3 px-8 rounded-lg transition duration-200">
                   <a href={`tel:8700356606 `}>
                Call Us Now
</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;