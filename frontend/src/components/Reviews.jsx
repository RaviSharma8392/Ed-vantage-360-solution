const reviews = [
  {
    rating: 5,
    title: "A Complete Game-Changer!",
    content:
      "EdVantage 360 Solutions transformed our entire academic and administrative approach. Their leadership training and academic audits brought clarity, purpose, and results. We’re seeing measurable improvements in both student engagement and faculty performance.",
    author: "— Principal, Harmony International School",
  },
  {
    rating: 5,
    title: "Everything Under One Roof",
    content:
      "From infrastructure and uniforms to digital classrooms and student workshops, EdVantage 360 Solutions has been our go-to partner. Their 360 support really takes the stress out of managing multiple vendors.",
    author: "— Administrator, Shanti Vidya Mandir",
  },
  {
    rating: 5,
    title: "Trusted Experts in Education",
    content:
      "The teacher training and competency mapping services helped us align with NEP 2020 goals effortlessly. Their team is professional, insightful, and always available for support.",
    author: "— Director, Sunrise Educational Trust",
  },
  {
    rating: 5,
    title: "Professional, Reliable, and Innovative",
    content:
      "We needed end-to-end support for setting up a vocational training centre. EdVantage 360 Solutions not only provided it but also guided us on branding, promotion, and student placement. Exceptional!",
    author: "— Project Head, FutureSkool Foundation",
  },
];

const Reviews = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 text-sm font-semibold text-blue-600 uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Trusted by Educational Leaders
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from institutions that transformed with our 360 solutions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-orange-500"></div>

              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating ? "fill-current" : "fill-gray-300"
                      }`}
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
                {review.title}
              </h3>

              <blockquote className="text-gray-600 mb-6">
                <p className="relative before:content-['“'] before:absolute before:top-0 before:left-0 before:text-5xl before:text-gray-200 before:font-serif before:leading-none before:-mt-2 before:-ml-2">
                  {review.content}
                </p>
              </blockquote>

              <div className="flex items-center">
                <div className="ml-0">
                  <p className="text-sm font-medium text-gray-900">
                    {review.author.replace("— ", "")}
                  </p>
                  <p className="text-sm text-gray-500">Verified Client</p>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 mb-6 mr-6 text-gray-200 group-hover:text-green-500 transition-colors duration-300">
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
