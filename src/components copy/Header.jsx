import { useState } from 'react';
import './styles/header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <h1 className="logo"><a href="/">Sk.Rehman</a></h1>

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      {menuOpen && (
        <nav className="nav-links">
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#skills" onClick={toggleMenu}>Skills</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#education" onClick={toggleMenu}>Education</a>
          <a href="#experience" onClick={toggleMenu}>Experience</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
