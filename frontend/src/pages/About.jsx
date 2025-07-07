import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Education-related images
  const images = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", // School building
    "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80", // Classroom
    "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80", // Students in lab
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80", // Graduation
  ];

  // Auto-advance carousel with 6 second interval
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  const goToSlide = (index) => {
    clearInterval(intervalRef.current);
    setCurrentIndex(index);
    // Restart auto-advance after manual navigation
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
  };

  return (
    <section className="bg-white text-gray-800 pt-24 pb-16 px-4 sm:px-6 lg:px-16 font-[sans-serif]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-600 mb-4">
            About EdVantage 360° Solutions
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering educational institutions with comprehensive, integrated
            solutions that drive growth, excellence, and future-readiness.
          </p>
        </header>

        {/* About Content */}
        <article className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Image Carousel */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg h-[400px]">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}>
                <img
                  src={image}
                  alt={`Education scene ${index + 1}`}
                  className={`w-full h-full object-cover transform transition-all duration-1000 ease-[cubic-bezier(0.2,0.6,0.2,1)] ${
                    index === currentIndex ? "scale-105" : "scale-100"
                  }`}
                  loading={index === 0 ? "eager" : "lazy"}
                  width={800}
                  height={600}
                />
              </div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-green-500 w-6"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="text-gray-700 text-base sm:text-lg">
              <strong>EdVantage 360° Solutions</strong> is a forward-thinking,
              women-led educational consultancy built on the collective
              expertise of four passionate educators with over 30 years of
              individual experience in teaching, school leadership, curriculum
              development, and institutional growth. Together, they have created
              a platform that empowers educational institutions to meet the
              challenges of a rapidly evolving academic landscape.
            </p>
            <p className="text-gray-700 text-base sm:text-lg">
              With deep roots in pedagogy and a vision for future-ready
              learning, EdVantage 360° Solutions offers a vibrant blend of
              innovation, tradition, and excellence. We serve as a one-stop
              solution hub for schools and educational bodies, supporting them
              across all key pillars—academic development, training, operational
              excellence, and recognition. What sets us apart is our unwavering
              commitment to building holistic, learner-centric ecosystems where
              every stakeholder—be it a teacher, student, leader, or parent—is
              empowered to thrive.
            </p>

            {/* <Link
              to="/services"
              className="inline-block mt-4 px-6 py-3 text-white bg-green-500 hover:bg-green-600 rounded-full shadow transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label="Learn more about our services">
              Read More
            </Link> */}
          </div>
        </article>

        {/* Mission & Vision */}
        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <aside>
            <h2 className="text-2xl font-semibold text-orange-500 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
              - To deliver end-to-end educational services under one roof
              <br />
              - To inspire lifelong learning and professional excellence
              <br />- To align schools with global standards while nurturing
              local values
            </p>
          </aside>
          <aside>
            <h2 className="text-2xl font-semibold text-green-600 mb-3">
              Our Vision
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
              To revolutionize education support services by being the most
              trusted and impactful partner for institutions aiming for holistic
              growth, quality assurance, and future-readiness.
            </p>
          </aside>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Ready to Transform Your Institution?
          </h2>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 text-white bg-orange-500 hover:bg-orange-600 rounded-full shadow transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            aria-label="Contact us to get started">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
