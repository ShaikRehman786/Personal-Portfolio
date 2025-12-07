import { FaCloud, FaExternalLinkAlt, FaGithub, FaGlobe, FaShoppingCart, FaUtensils } from 'react-icons/fa';
import './styles/Projects.css';

const Projects = () => {
  const ecommerceProject = {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce application with user authentication, product management, shopping cart, payment integration, and admin dashboard.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe'],
    github: 'https://github.com/ShaikRehman786/E-Commerce',
    live: 'https://e-commerce-six-iota-95.vercel.app/',
    highlights: ['User Authentication', 'Payment Gateway', 'Admin Panel', 'Real-time Updates']
  };

  const frontendProjects = [
    { 
      name: 'Weather App', 
      icon: <FaCloud />,
      description: 'Real-time weather forecasts with API integration',
      live: 'https://weather-psi-ivory.vercel.app/'
    },
    { 
      name: 'Country Finder', 
      icon: <FaGlobe />,
      description: 'Explore countries with detailed information',
      live: 'https://country-finder-gilt-nine.vercel.app/'
    },
    { 
      name: 'Recipe Finder', 
      icon: <FaUtensils />,
      description: 'Search and discover delicious recipes',
      live: 'https://hackathon-mission-5.vercel.app/'
    },
    { 
      name: 'Restaurant Menu', 
      icon: <FaUtensils />,
      description: 'Elegant restaurant menu interface',
      live: 'https://food-restaurant-frontend.vercel.app/'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        {/* E-Commerce Project */}
        <div className="featured-project">
          <div className="featured-badge">
            <FaShoppingCart /> Full Stack Application
          </div>
          <h3 className="featured-title">{ecommerceProject.title}</h3>
          <p className="featured-description">{ecommerceProject.description}</p>
          
          <div className="highlights-grid">
            {ecommerceProject.highlights.map((item, idx) => (
              <div key={idx} className="highlight-item">✓ {item}</div>
            ))}
          </div>

          <div className="tech-list">
            {ecommerceProject.tech.map((tech, idx) => (
              <span key={idx} className="tech-item">{tech}</span>
            ))}
          </div>

          <div className="project-actions">
            <a href={ecommerceProject.github} target="_blank" rel="noopener noreferrer" className="action-btn github-btn">
              <FaGithub /> GitHub
            </a>
            <a href={ecommerceProject.live} target="_blank" rel="noopener noreferrer" className="action-btn demo-btn">
              <FaExternalLinkAlt /> Live Demo
            </a>
          </div>
        </div>

        {/* Frontend Projects */}
        <div className="frontend-section">
          <h3 className="frontend-title">Frontend Projects</h3>
          <div className="frontend-grid">
            {frontendProjects.map((project, idx) => (
              <a 
                key={idx}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="frontend-card"
              >
                <div className="card-icon">{project.icon}</div>
                <h4 className="card-title">{project.name}</h4>
                <p className="card-description">{project.description}</p>
                <div className="card-arrow">
                  <FaExternalLinkAlt />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
