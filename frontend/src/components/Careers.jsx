import { FaSearch, FaMapMarkerAlt, FaBriefcase, FaRegClock } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Educational Consultant",
      type: "Full-time",
      location: "Remote",
      department: "Consulting",
      posted: "2 days ago",
      description: "Provide expert guidance to educational institutions on curriculum development and assessment strategies."
    },
    {
      id: 2,
      title: "Data Analyst",
      type: "Full-time",
      location: "Noida, India",
      department: "Analytics",
      posted: "1 week ago",
      description: "Transform educational data into actionable insights for school improvement programs."
    },
    {
      id: 3,
      title: "UX Designer",
      type: "Contract",
      location: "Remote",
      department: "Product",
      posted: "3 weeks ago",
      description: "Design intuitive interfaces for our educational technology platforms."
    },
    {
      id: 4,
      title: "Marketing Specialist",
      type: "Full-time",
      location: "Noida, India",
      department: "Marketing",
      posted: "1 month ago",
      description: "Develop and execute marketing strategies to promote our educational solutions."
    },
  ];

  const benefits = [
    {
      icon: "🏝️",
      title: "Flexible Vacation",
      description: "Unlimited PTO with mandatory minimums"
    },
    {
      icon: "🏡",
      title: "Remote Work",
      description: "Work from anywhere options"
    },
    {
      icon: "📚",
      title: "Learning Stipend",
      description: "Annual budget for professional development"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Leave",
      description: "Generous parental leave policies"
    },
    {
      icon: "💪",
      title: "Wellness",
      description: "Health insurance and fitness reimbursements"
    },
    {
      icon: "🚀",
      title: "Growth",
      description: "Clear career progression paths"
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-50 to-orange-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Build the Future of <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-orange-500">Education</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our mission to transform educational institutions through data-driven insights and innovative solutions.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#openings" 
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              View Open Positions
            </a>
            <a 
              href="#culture" 
              className="px-8 py-3 border-2 border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-50 transition-colors"
            >
              Our Culture
            </a>
          </div>
        </div>
      </div>

      {/* Job Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Your Perfect Role</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Job title or keyword"
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaMapMarkerAlt className="text-gray-400" />
              </div>
              <select className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 appearance-none">
                <option value="">All Locations</option>
                <option value="remote">Remote</option>
                <option value="noida">Noida, India</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaBriefcase className="text-gray-400" />
              </div>
              <select className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 appearance-none">
                <option value="">All Departments</option>
                <option value="consulting">Consulting</option>
                <option value="analytics">Analytics</option>
                <option value="product">Product</option>
                <option value="marketing">Marketing</option>
              </select>
            </div>
            <button className="bg-gradient-to-r from-green-600 to-green-700 text-white font-medium rounded-lg hover:opacity-90 transition-opacity px-6 py-3">
              Search Jobs
            </button>
          </div>
        </div>
      </div>

      {/* Job Openings */}
      <div id="openings" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Current Openings</h2>
        <p className="text-lg text-gray-600 mb-8">Browse our available positions and find your next career move</p>
        
        <div className="space-y-6">
          {jobOpenings.map((job) => (
            <div key={job.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <span className="flex items-center text-gray-600">
                      <FaBriefcase className="mr-2 text-orange-500" />
                      {job.type}
                    </span>
                    <span className="flex items-center text-gray-600">
                      <FaMapMarkerAlt className="mr-2 text-orange-500" />
                      {job.location}
                    </span>
                    <span className="flex items-center text-gray-600">
                      <FaRegClock className="mr-2 text-orange-500" />
                      {job.posted}
                    </span>
                  </div>
                </div>
                <a 
                  href={`/careers/${job.id}`} 
                  className="mt-4 md:mt-0 inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  View Details <FiChevronRight className="ml-1" />
                </a>
              </div>
              <p className="mt-4 text-gray-600">{job.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Culture & Benefits */}
      <div id="culture" className="bg-gradient-to-r from-green-50 to-orange-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Culture & Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building more than a company - we're building a community of passionate educators and innovators.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Don't See Your Dream Job?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          We're always looking for talented individuals. Send us your resume and we'll contact you when a matching position opens up.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="/careers/apply" 
            className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Submit Your Resume
          </a>
          <a 
            href="/contact" 
            className="px-8 py-3 border-2 border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-50 transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default Careers;