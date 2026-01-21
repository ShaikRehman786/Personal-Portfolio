import {
  FaGitAlt,
  FaNodeJs,
  FaReact
} from 'react-icons/fa';
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiPython
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { VscCode } from 'react-icons/vsc';
import './styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: <SiHtml5 /> },
        { name: 'CSS', icon: <SiCss3 /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'React', icon: <FaReact /> }
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'MongoDB', icon: <SiMongodb /> }
      ]
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', icon: <DiJava /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Python', icon: <SiPython />}
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git & GitHub', icon: <FaGitAlt /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'VS Code', icon: <VscCode /> }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h3 className="category-title">{category.title}</h3>

              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
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
