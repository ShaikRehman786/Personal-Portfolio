import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import './styles/Hero.css'



const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Shaik Rehman</span>
          </h1>
          <h2 className="hero-subtitle">
            <Typewriter
              words={['Frontend Developer', 'Backend Developer', 'Full Stack Developer']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="hero-description">
            Recent graduate passionate about web development and eager to contribute to innovative projects.
            Ready to learn, grow, and make an impact in the tech industry.
          </p>
          
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="./Shaik_Rehman_Portfolio.pdf" download className="btn btn-secondary">
              <FaDownload /> Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/ShaikRehman786" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/shaik-rehman-9449082ab/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:shaikrehman78609@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-wrapper">
            <img src="/PortPic.png" alt="Profile" />
          </div>
        </div>
      </div>
      

    </section>
  );
};

export default Hero;
