
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to <span className="text-blue-600">MyBlog</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Explore insightful articles on web development, coding tips, and tech news.
        </p>
        <a
          href="#blogs"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
        >
          Read Blogs
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
