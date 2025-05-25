import { FaSearch, FaCalendarAlt, FaUser, FaTags, FaArrowRight } from "react-icons/fa";
import { FiShare2, FiBookmark } from "react-icons/fi";

const Blog = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "Transforming Education with Data Analytics",
      excerpt: "How data-driven insights are revolutionizing school improvement strategies and student outcomes.",
      category: "Analytics",
      date: "May 15, 2023",
      author: "Dr. Ravi Sharma",
      readTime: "8 min read",
      image: "/blog/data-analytics.jpg"
    },
    {
      id: 2,
      title: "The Future of Remote Learning Technologies",
      excerpt: "Exploring emerging technologies that are shaping the next generation of digital classrooms.",
      category: "Technology",
      date: "April 28, 2023",
      author: "Priya Patel",
      readTime: "6 min read",
      image: "/blog/remote-learning.jpg"
    }
  ];

  const recentPosts = [
    {
      id: 3,
      title: "Building Inclusive Classroom Environments",
      excerpt: "Practical strategies for creating learning spaces that welcome all students.",
      category: "Teaching",
      date: "April 10, 2023",
      author: "Anjali Desai",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "Curriculum Design for the 21st Century",
      excerpt: "How to develop curricula that prepare students for an evolving workforce.",
      category: "Curriculum",
      date: "March 22, 2023",
      author: "Dr. Sanjay Gupta",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Assessment Strategies That Actually Work",
      excerpt: "Moving beyond standardized tests to meaningful student evaluation.",
      category: "Assessment",
      date: "March 15, 2023",
      author: "Neha Kapoor",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Teacher Wellness and Retention",
      excerpt: "Why supporting educator mental health is crucial for school success.",
      category: "Leadership",
      date: "February 28, 2023",
      author: "Dr. Ravi Sharma",
      readTime: "6 min read"
    }
  ];

  const categories = [
    { name: "All Topics", count: 24 },
    { name: "Leadership", count: 6 },
    { name: "Technology", count: 5 },
    { name: "Teaching", count: 4 },
    { name: "Curriculum", count: 3 },
    { name: "Assessment", count: 3 },
    { name: "Analytics", count: 3 }
  ];

  const tags = [
    "Data Science", "Remote Learning", "Professional Development", 
    "Student Engagement", "EdTech", "School Improvement", 
    "Inclusive Education", "21st Century Skills"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-50 to-orange-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Insights & <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-orange-500">Innovations</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert perspectives on educational leadership, technology, and transformative teaching practices.
          </p>
          <div className="mt-10 max-w-md mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles, topics, or authors..."
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-orange-500 pb-2 inline-block">
          Featured Articles
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-auto">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 flex items-center mr-4">
                      <FaUser className="mr-1 text-orange-500" /> {post.author}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <FaCalendarAlt className="mr-1 text-orange-500" /> {post.date}
                    </span>
                  </div>
                  <a 
                    href={`/blog/${post.id}`} 
                    className="text-green-600 hover:text-green-700 font-medium flex items-center"
                  >
                    Read more <FaArrowRight className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Posts */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-orange-500 pb-2 inline-block">
              Latest Articles
            </h2>
            
            <div className="space-y-8">
              {recentPosts.map((post) => (
                <article key={post.id} className="border-b border-gray-200 pb-8">
                  <div className="flex items-center mb-2">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm ml-auto">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 flex items-center mr-4">
                        <FaUser className="mr-1 text-orange-500" /> {post.author}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <FaCalendarAlt className="mr-1 text-orange-500" /> {post.date}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button className="text-gray-500 hover:text-green-600">
                        <FiBookmark />
                      </button>
                      <button className="text-gray-500 hover:text-green-600">
                        <FiShare2 />
                      </button>
                      <a 
                        href={`/blog/${post.id}`} 
                        className="text-green-600 hover:text-green-700 font-medium flex items-center"
                      >
                        Read more <FaArrowRight className="ml-1" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="px-3 py-2 border-t border-b border-gray-300 bg-white text-green-600 font-medium"
                >
                  1
                </a>
                <a
                  href="#"
                  className="px-3 py-2 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
                >
                  2
                </a>
                <a
                  href="#"
                  className="px-3 py-2 border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
                >
                  3
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
                >
                  Next
                </a>
              </nav>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <FaTags className="text-orange-500 mr-2" /> Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="flex items-center justify-between text-gray-600 hover:text-green-600 hover:underline"
                    >
                      <span>{category.name}</span>
                      <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded">
                        {category.count}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <a
                    key={index}
                    href="#"
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-green-100 hover:text-green-700"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Stay Updated</h3>
              <p className="text-gray-600 mb-4">
                Get the latest articles and resources delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-medium rounded-lg py-2 hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;