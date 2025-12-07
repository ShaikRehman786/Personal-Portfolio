import { FaCode, FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa';
import './styles/About.css';

const About = () => {
  const highlights = [
    { icon: <FaCode />, title: 'Clean Code', desc: 'Learning best practices and coding standards' },
    { icon: <FaLightbulb />, title: 'Quick Learner', desc: 'Adapting to new technologies rapidly' },
    { icon: <FaRocket />, title: 'Motivated', desc: 'Eager to take on new challenges' },
    { icon: <FaUsers />, title: 'Team Player', desc: 'Great communication and collaboration skills' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a recent graduate with a strong passion for web development and software engineering.
              During my academic journey, I've built a solid foundation in programming and developed 
              several projects that showcase my skills.
            </p>
            <p>
              I'm proficient in modern web technologies and constantly learning new frameworks and tools.
              My goal is to join a dynamic team where I can contribute, learn from experienced developers,
              and grow as a professional.
            </p>
            <p>
              When I'm not coding, you'll find me taking online courses, working on personal projects,
              or exploring the latest tech trends and best practices in software development.
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
