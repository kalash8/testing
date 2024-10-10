import React from 'react';
import { Link } from 'react-scroll';  // Import Link from react-scroll
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500}>Services</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;