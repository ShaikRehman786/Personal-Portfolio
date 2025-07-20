import './styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-list">

        <div className="experience-item">
          <h3>G-Tech</h3>
          <p><strong>Role:</strong> Python Intern</p>
          <p><strong>Duration:</strong> July 2023 - August 2023</p>
          <p>Worked on Python-based automation scripts and data processing tasks.</p>
        </div>

        <div className="experience-item">
          <h3>Cognifyz Technologies</h3>
          <p><strong>Role:</strong> Full Stack Web Developer (MERN) Intern</p>
          <p><strong>Duration:</strong> April 2025 - May 2025</p>
          <p>Developed web applications using MongoDB, Express.js, React, and Node.js.</p>
        </div>

        <div className="experience-item">
          <h3>Infotact Solutions</h3>
          <p><strong>Role:</strong> Full Stack Web Developer (MERN) Intern | Team Lead</p>
          <p><strong>Duration:</strong> May 2025 - August 2025</p>
          <p>Led the development of an e-commerce platform <em>(Desi Etsy)</em>, managed a team, and handled both frontend and backend development.</p>
        </div>

        <div className="experience-item">
          <h3>BlackBucks Engineers</h3>
          <p><strong>Role:</strong> Full Stack Web Developer (MERN) Intern</p>
          <p><strong>Duration:</strong> May 2025 - July 2025</p>
          <p>Contributed to multiple full-stack projects, focusing on React.js and backend API development.</p>
        </div>

      </div>
    </section>
  );
};

export default Experience;
