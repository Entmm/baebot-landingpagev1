// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Community from './components/Community';
import DeveloperResources from './components/DeveloperResources';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Community />
      <DeveloperResources />
      <Footer />
    </div>
  );
};

export default App;
