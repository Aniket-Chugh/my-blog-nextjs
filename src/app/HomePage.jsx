import React from 'react';
import Navbar from './NavBar';
import HeroSection from './HeroSection';
import BlogList from './BlogList';
import Footer from './Footer';

function HomePage() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <BlogList></BlogList>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
