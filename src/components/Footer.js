import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 [Your Company Name]. All rights reserved.</p>
      <div className="social-icons">
        <a href="https://facebook.com"><img src="/facebook-icon.png" alt="Facebook" /></a>
        <a href="https://twitter.com"><img src="/twitter-icon.png" alt="Twitter" /></a>
      </div>
    </footer>
  );
};

export default Footer;