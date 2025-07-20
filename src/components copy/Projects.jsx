import './styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-list">


        <div className="project-item">
  <h3>Desi Etsy (Internship Project)</h3>
  <p>
    An e-commerce platform inspired by Etsy, developed as part of my <strong>Infotact Internship</strong>, where I served as the <strong>Team Lead</strong>.
    The platform enables users to explore, buy, and sell unique handmade and vintage products with a seamless shopping experience.
    I played a key role in orchestrating both <strong>frontend and backend</strong> development, UI/UX design collaboration, and deploying the application on Render.
  </p>
  <ul>
    <li>Frontend: React.js, Tailwind CSS</li>
    <li>Backend: Node.js, Express.js, MongoDB</li>
    <li>Features: Product listing, category filters, secure user authentication, shopping cart, and payment integration</li>
    <li>Role-based access for customers and sellers</li>
    <li>End-to-end API testing with Postman and frontend integration</li>
    <li>Deployment: Both frontend and backend hosted on <strong>Render</strong></li>
  </ul>
  <a href="https://github.com/ShaikRehman786/Desi-Etsy_Clone" target="_blank" rel="noopener noreferrer">View Code</a> |{' '}
  <a href="https://desi-etsy-clone-frontend.onrender.com/" target="_blank" rel="noopener noreferrer">Live Demo</a>
</div>

        <div className="project-item">
          <h3>FoodApp (Internship Project)</h3>
          <p>
            A full-stack food delivery application developed as part of my <strong>Infotact Internship</strong>, where I led the team as the <strong>Team Lead</strong>.
            The application allows users to browse, order, and manage food items with an intuitive UI and secure backend services.
            I actively contributed to both <strong>frontend and backend</strong> development, overseeing the complete project lifecycle including deployment.
          </p>
          <ul>
            <li>Frontend: React.js, Tailwind CSS</li>
            <li>Backend: Node.js, Express.js, MongoDB</li>
            <li>Features: JWT-based authentication, product and cart management, user roles, and secure payments</li>
            <li>Tested APIs using Postman and integrated with the frontend UI</li>
            <li>Deployment: Both frontend and backend hosted on <strong>Render</strong></li>
          </ul>
          <a href="https://github.com/ShaikRehman786/Food_Delivery" target="_blank" rel="noopener noreferrer">View Code</a> |{' '}
          <a href="https://food-frontend-diu9.onrender.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>

        <div className="project-item">
          <h3>JobPortalX (Internship Project)</h3>
          <p>
            A comprehensive job portal platform developed during my <strong>Blackbucks Internship</strong> using the <strong>MERN stack</strong>.
            The platform facilitates job postings, applications, and user management for both employers and job seekers.
            I worked across the full-stack, implementing key features and ensuring smooth user interactions.
          </p>
          <ul>
            <li>Built with MERN stack: MongoDB, Express.js, React.js, Node.js</li>
            <li>Features: User authentication, job postings, applications, employer dashboards</li>
            <li>Secure APIs with JWT and role-based access control</li>
            <li>Deployment: Hosted on Render</li>
          </ul>
          <a href="https://github.com/ShaikRehman786/JobPortalX" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
