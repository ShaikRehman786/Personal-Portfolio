import './styles/hero.css';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className='hero-image'>
        <img src={'PortPic.png'} alt="img" />
      </div>
      <div className="hero-text">
        <h2>Hi There,</h2>
        <h1>I'm Shaik Rehman</h1>
        <h2 className='type-writer'>
          <span>
            <Typewriter
              words={['Frontend Developer', 'Backend Developer', 'Full Stack Web Developer']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </h2>
      </div>
    </section>
  );
};

export default Hero;
