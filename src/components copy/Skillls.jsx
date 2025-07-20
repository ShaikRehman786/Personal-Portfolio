import './styles/Skills.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill-item"><FaHtml5 size={40} color="#e34c26" /><h3>HTML</h3></div>
        <div className="skill-item"><FaCss3Alt size={40} color="#2965f1" /><h3>CSS</h3></div>
        <div className="skill-item"><FaJsSquare size={40} color="#f0db4f" /><h3>JavaScript</h3></div>
        <div className="skill-item"><FaReact size={40} color="#61dafb" /><h3>React JS</h3></div>
        <div className="skill-item"><FaNodeJs size={40} color="#6cc24a" /><h3>Node JS</h3></div>
        <div className="skill-item"><SiExpress size={40} color="#000000" /><h3>Express JS</h3></div>
        <div className="skill-item"><SiMongodb size={40} color="#47A248" /><h3>MongoDB</h3></div>
        <div className="skill-item"><FaPython size={40} color="#306998" /><h3>Python</h3></div>
      </div>
    </section>
  );
};

export default Skills;
