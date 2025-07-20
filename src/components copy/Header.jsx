import { useState, useEffect } from 'react';
import './styles/header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <h1 className="logo"><a href="/">Sk.Rehman</a></h1>

      {isMobile ? (
        <>
          <div className="menu-icon" onClick={toggleMenu}>☰</div>
          {menuOpen && (
            <nav className="nav-links mobile">
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
              <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
              <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </nav>
          )}
        </>
      ) : (
        <nav className="nav-links desktop">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
