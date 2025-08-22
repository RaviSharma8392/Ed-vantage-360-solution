import React from "react";
import Slider from "react-slick";

// Working images of schools
const schools = [
  {
    name: "Delhi Public School",
    img: "https://dubai.isaevents.org/wp-content/uploads/2025/08/IMG-20241214-WA0004-1.png",
  },
  {
    name: "La Martiniere School",
    img: "https://dubai.isaevents.org/wp-content/uploads/2025/08/image-2.png",
  },
  {
    name: "Modern School",
    img: "https://dubai.isaevents.org/wp-content/uploads/2025/08/IMG-20241214-WA0004-1.png",
  },
  {
    name: "National Public School",
    img: "https://dubai.isaevents.org/wp-content/uploads/2025/08/FIS-RC-final-logo-1.png",
  },
  {
    name: "St. Xavier’s School",
    img: "https://dubai.isaevents.org/wp-content/uploads/2025/08/FB_IMG_1735301217329-1.png",
  },
];

export default function PartnerSchools() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-white text-gray-900 py-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our <span className="text-yellow-500">Partner Schools</span>
        </h2>
        <p className="text-gray-600 text-lg mb-16">
          Celebrating collaboration with some of the most prestigious schools
          shaping the future of education worldwide.
        </p>

        <Slider {...settings}>
          {schools.map((school, index) => (
            <div key={index} className="px-2">
              <div className="bg-gradient-to-br from-yellow-50 via-white to-yellow-50 rounded-3xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <img
                  src={school.img}
                  alt={school.name}
                  className="h-24 md:h-28 w-auto object-contain mb-4"
                />
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center">
                  {school.name}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
