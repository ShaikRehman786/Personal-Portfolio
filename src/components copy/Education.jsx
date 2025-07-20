import React from 'react';
import './styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-list">
        <div className="education-item">
          <h3>Masters of Computer Applications (MCA)</h3>
          <p>Aditya University, Surampalem, Kakinada (2024-2026)</p>
          <p><strong>Current Status:</strong> Pursuing</p>
        </div>
        <div className="education-item">
          <h3>Bachelor of Science (Computer Science)</h3>
          <p>SSBN Degree College, Anantapur (2021-2024)</p>
          <p><strong>Result:</strong> 84.1%</p>
        </div>
        <div className="education-item">
          <h3>Board of Intermediate (MPC)</h3>
          <p>Sri Viswasanthi Institutions, Vuyyuru (2021)</p>
          <p><strong>Result:</strong> 87.9%</p>
        </div>
        <div className="education-item">
          <h3>Secondary School Certificate (SSC)</h3>
          <p>Golden Bells High School, Kalyandurg (2019)</p>
          <p><strong>Result:</strong> 90.0%</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
