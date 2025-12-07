import { FaDatabase, FaGitAlt, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { SiExpress, SiJavascript, SiMongodb, SiPostgresql, SiPostman, SiTailwindcss } from 'react-icons/si';
import './styles/Skills.css';
import { VscCode } from 'react-icons/vsc';
import { DiJava } from 'react-icons/di';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML/CSS', icon: <FaReact />, level: 90 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 85 },
        { name: 'React', icon: <FaReact />, level: 80 },
        { name: 'Bootstrap', icon: <SiTailwindcss />, level: 70 }
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 70 },
        { name: 'Express', icon: <SiExpress />, level: 65 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 70 },
        { name: 'SQL', icon: <FaDatabase />, level: 65 }
      ]
    },
    {
      title: 'Programming & Tools',
      skills: [
        { name: 'Java', icon: <DiJava />, level: 75 },
        { name: 'Git & GitHub', icon: <FaGitAlt />, level: 80 },
        { name: 'VS Code', icon: <VscCode />, level: 85 },
        { name: 'Postman', icon: <SiPostman />, level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
