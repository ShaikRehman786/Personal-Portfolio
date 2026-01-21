import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Typewriter } from 'react-simple-typewriter';
import './styles/Hero.css';

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
              words={['Web Developer', 'MERN Stack Developer']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          <p className="hero-description">
            MCA fresher with hands-on experience in MERN stack.
            Built real-world projects and freelance websites.
            Open to fresher SDE roles, collaboration, and learning.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
          <a href="/resume.pdf" download className="btn btn-secondary">
            <FaDownload /> Resume
          </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/ShaikRehman786"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shaik-rehman-9449082ab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://leetcode.com/u/sIrCr8oihS/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode />
            </a>

            <a href="mailto:shaikrehman78609@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <img src="/Profile_Pic.png" alt="Shaik Rehman" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
