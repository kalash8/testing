import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { Element } from 'react-scroll'; 

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Element name="home">
        <HeroSection />
      </Element>

      {/* services Section */}
      <Element name="services">
        <Services />
      </Element>

      {/* Contact Form Section */}
      <Element name="contact">
        <ContactForm />
      </Element>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;