
import React from 'react';

const blogs = [
  {
    id: 1,
    title: "How to Start with React",
    category: "React",
    description: "A complete guide to start your journey with React.js.",
  },
  {
    id: 2,
    title: "Node.js Authentication",
    category: "Backend",
    description: "Learn how to handle authentication with Node.js and Express.",
  },
  {
    id: 3,
    title: "Tailwind CSS Basics",
    category: "CSS",
    description: "Understanding utility-first styling with Tailwind.",
  },
];

const BlogList = () => {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto text-black cursor-pointer">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">All Blogs</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition">
            <span className="text-sm text-white bg-blue-600 px-2 py-1 rounded">{blog.category}</span>
            <h3 className="text-xl font-semibold mt-3">{blog.title}</h3>
            <p className="text-gray-600 mt-2">{blog.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogList;
