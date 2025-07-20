// import './styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo"><a href='/'>Sk.Rehman</a></h1>
      <nav>
        <ul className="nav-links">
          {/* <li><a href="#home">Home</a></li> */}
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;