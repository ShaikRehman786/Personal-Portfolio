import {
  FaCar,
  FaExternalLinkAlt,
  FaGithub,
  FaGlobe,
  FaCloud,
  FaFilm,
  FaStore
} from 'react-icons/fa';
import './styles/Projects.css';

const Projects = () => {
  const majorProject = {
    title: 'Bike & Car Rental System (Academic Major Project)',
    description:
      'This is my MCA academic major project. Backend development is completed and frontend development is currently in progress. The project is based on a real-world rental booking system with role-based authentication and payment integration under testing.',
    tech: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT Authentication',
      'REST APIs',
      'React (in progress)'
    ],
    github: 'https://github.com/ShaikRehman786/Car-and-Bike-Rental-System',
    highlights: [
      'Backend completed with authentication and REST APIs',
      'Frontend development currently in progress',
      'Role-based authentication (Admin, Provider, Customer)',
      'Bike and car listing with admin approval',
      'Vehicle booking and cancellation flow',
      'Payment integration under testing',
      'Academic project with real-world use case'
    ]
  };

  const frontendProjects = [
    {
      name: 'Local Shop Website (Freelance)',
      icon: <FaStore />,
      description:
        'Frontend website developed for a local shop to improve online visibility. Includes responsive design, shop details, and contact section.',
      live: 'https://power-tools-psi.vercel.app/'
    },
    {
      name: 'Country Finder',
      icon: <FaGlobe />,
      description:
        'Frontend application to search and view country details such as capital, region, population, and flag using a public API.',
      live: 'https://country-finder-gilt-nine.vercel.app/'
    },
    {
      name: 'Movie Search App',
      icon: <FaFilm />,
      description:
        'Movie search application that allows users to search movies and view basic details using the OMDb API.',
      live: 'https://imdb-nine-chi.vercel.app/'
    }
  ];


  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        {/* Academic Major Project */}
        <div className="featured-project">
          <div className="featured-badge">
            <FaCar /> Academic Major Project
          </div>

          <h3 className="featured-title">{majorProject.title}</h3>
          <p className="featured-description">{majorProject.description}</p>

          <div className="highlights-grid">
            {majorProject.highlights.map((item, idx) => (
              <div key={idx} className="highlight-item">
                ✓ {item}
              </div>
            ))}
          </div>

          <div className="tech-list">
            {majorProject.tech.map((tech, idx) => (
              <span key={idx} className="tech-item">
                {tech}
              </span>
            ))}
          </div>

          <div className="project-actions">
            <a
              href={majorProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn"
            >
              <FaGithub /> Backend Code
            </a>

            <a
              href={majorProject.live}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn"
            >
              <FaExternalLinkAlt /> Frontend (In Progress)
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
