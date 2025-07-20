import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Shaik Rehman. All Rights Reserved.</p>
        <div className="footer-socials">
          <a href="https://github.com/shaikrehman" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/shaikrehman" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:shaikrehman78609@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
