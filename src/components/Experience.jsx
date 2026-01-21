import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './styles/Experience.css';

const Experience = () => {
  const education = [
    {
      title: 'Master of Computer Applications (MCA)',
      institution: 'Aditya University',
      period: '2024 – 2026',
      details: [
        'CGPA: 8.70',
        'Currently pursuing MCA',
        'Learning full stack development and core computer science subjects'
      ]
    },
    {
      title: 'B.Sc. (MIECS)',
      institution: 'SSBN Degree College',
      period: '2021 – 2024',
      details: [
        'CGPA: 8.41',
        'Studied Mathematics, Computer Science and Electronics',
        'Built basic web and programming projects'
      ]
    },
    {
      title: 'Intermediate (MPC)',
      institution: 'Sri Vishwasanthi Institute',
      period: '2021',
      details: [
        'Score: 87.9%',
        'Subjects: Mathematics, Physics, Chemistry'
      ]
    },
    {
      title: 'SSC',
      institution: 'Golden Bells School',
      period: '2019',
      details: [
        'CGPA: 9.0',
        'Built strong basics in mathematics and problem solving'
      ]
    }
  ];

  const work = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Infotact Solutions',
      period: 'May 2025 – Aug 2025',
      details: [
        'Worked with a small team on a MERN stack web application',
        'Developed frontend components using React',
        'Created backend APIs using Node.js and Express',
        'Implemented user authentication using JWT',
        'Used Git and GitHub for version control'
      ]
    },
    {
      title: 'Web Development Intern',
      company: 'BlackBucks',
      period: 'May 2025 – Jun 2025',
      details: [
        'Worked on frontend and backend tasks for a web application',
        'Improved UI responsiveness and fixed bugs',
        'Integrated APIs and handled basic database operations',
        'Learned real-world development workflow'
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
              <h3>Internship Experience</h3>
            </div>

            <div className="exp-items">
              {work.map((job, idx) => (
                <div key={idx} className="exp-item">
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
                <div key={idx} className="exp-item">
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
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
