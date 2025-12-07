import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './styles/Experience.css';

const Experience = () => {
  const education = [
    {
      title: 'Master of Computer Applications (MCA)',
      institution: 'Aditya University',
      period: '2024 - 2026',
      details: [
        'CGPA: 8.70',
        'Pursuing postgraduate specialization Computer Applications',
        'Learning advanced full-stack development & software engineering topics'
      ]
    },
    {
      title: 'B.Sc. (MIECS) - Mathematics, Computer Science, Electronics',
      institution: 'SSBN Degree College',
      period: '2021 - 2024',
      details: [
        'CGPA: 8.41',
        'Built strong foundation in programming, data structures & web technologies',
        'Completed academic projects in web development'
      ]
    },
    {
      title: 'Intermediate (MPC)',
      institution: 'Sri Vishwasanthi Institute',
      period: '2021',
      details: [
        'Score: 87.9%',
        'Studied Mathematics, Physics, and Chemistry'
      ]
    },
    {
      title: 'SSC',
      institution: 'Golden Bells School',
      period: '2019',
      details: [
        'CGPA: 9.0',
        'Focused on academic excellence & problem-solving fundamentals'
      ]
    }
  ];

  const work = [
    {
      title: 'Full Stack Developer Intern / Team Lead',
      company: 'Infotact Solutions',
      period: 'May 2025 – Aug 2025',
      details: [
        'Led a 4-member team to develop a scalable e-commerce web application using the MERN stack',
        'Built responsive and reusable UI components using React.js & Tailwind CSS',
        'Developed secure REST APIs with Node.js & Express.js, integrating JWT authentication',
        'Designed and managed MongoDB schemas, including indexing & query optimization',
        'Used Git & GitHub for version control, branch management, pull requests, and team code reviews'
      ]
    },
    {
      title: 'Web Development Intern',
      company: 'BlackBucks',
      period: 'May 2025 – Jun 2025',
      details: [
        'Contributed to full-stack feature development for an e-commerce project using React, Node.js & MongoDB',
        'Improved frontend performance, reusability & UI responsiveness using modern JavaScript techniques',
        'Integrated APIs and collaborated using Git & version control practices',
        'Debugged UI issues and optimized components for faster rendering'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Education & Experience</h2>
        
        <div className="experience-wrapper">
          {/* Work Experience */}
          <div className="exp-section">
            <div className="exp-header">
              <FaBriefcase className="exp-icon" />
              <h3>Work Experience</h3>
            </div>
            <div className="exp-items">
              {work.map((job, idx) => (
                <div key={idx} className="exp-content">
                  <div className="exp-item">
                    <div className="exp-top">
                      <h4>{job.title}</h4>
                      <span className="exp-period">{job.period}</span>
                    </div>
                    <p className="exp-place">{job.company}</p>
                    <ul className="exp-list">
                      {job.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="exp-section">
            <div className="exp-header">
              <FaGraduationCap className="exp-icon" />
              <h3>Education</h3>
            </div>
            <div className="exp-items">
              {education.map((edu, idx) => (
                <div key={idx} className="exp-content">
                  <div className="exp-item">
                    <div className="exp-top">
                      <h4>{edu.title}</h4>
                      <span className="exp-period">{edu.period}</span>
                    </div>
                    <p className="exp-place">{edu.institution}</p>
                    <ul className="exp-list">
                      {edu.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience