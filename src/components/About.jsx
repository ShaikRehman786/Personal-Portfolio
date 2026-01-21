import { FaCode, FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa';
import './styles/About.css';

const About = () => {
  const highlights = [
    {
      icon: <FaCode />,
      title: 'Clean Coding',
      desc: 'I try to write simple and readable code'
    },
    {
      icon: <FaLightbulb />,
      title: 'Quick Learner',
      desc: 'I learn new tools and concepts step by step'
    },
    {
      icon: <FaRocket />,
      title: 'Motivated',
      desc: 'I like improving my skills by building projects'
    },
    {
      icon: <FaUsers />,
      title: 'Team Player',
      desc: 'Comfortable working with others and sharing ideas'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              I am an MCA fresher interested in web development.
              I have learned frontend and backend basics and built
              a few projects using modern technologies.
            </p>

            <p>
              I enjoy working on real projects because it helps me
              understand concepts better. I try to write clean code
              and follow good practices while learning.
            </p>

            <p>
              I am looking for fresher opportunities, collaboration,
              or small freelance work where I can improve my skills
              and grow as a developer.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
