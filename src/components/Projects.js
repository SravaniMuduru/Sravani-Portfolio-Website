import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Train Ticket Reservation System",
      image: "assets/admin dashborad.png",
      description: "Created a secure online system for train ticket reservations with features like schedule viewing, seat availability checks, fare inquiries, and online booking with payment integration.",
      technologies: ["Java", "JSP", "Servlets", "MySQL", "Bootstrap", "JDBC", "HTML/CSS"],
      links: {
        view: "https://github.com/SravaniMuduru/Train-Ticket-Reservation-System",
        code: "https://github.com/SravaniMuduru/Train-Ticket-Reservation-System"
      }
    },
    {
      title: "Arogya Seva",
      image: "assets/home page .png",
      description: "Developed a comprehensive web application to manage hospital operations including patient records, doctor schedules, appointments, and administrative functions with role-based access.",
      technologies: ["Java", "JSP", "Servlets", "MySQL", "Bootstrap", "JDBC", "HTML/CSS", "Admin Dashboard"],
      links: {
        view: "https://github.com/SravaniMuduru/ArogyaSeva-WebApplication-for-HospitalManagement",
        code: "https://github.com/SravaniMuduru/ArogyaSeva-WebApplication-for-HospitalManagement"
      }
    },
    {
      title: "Product Filter & Search",
      image: "assets/Responsive-UI.png",
      description: "A responsive and dynamic frontend project that allows users to search and filter through product cards based on category and name. Built using only HTML, CSS, and vanilla JavaScript with clean UI and fast performance.",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: {
        view: "https://sravani-product-filter-search.netlify.app/",
        code: "https://github.com/SravaniMuduru/Product-Filter-Search.git"
      }
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Some of my recent work and contributions</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card glass-card" key={index}>
              <div className="project-img-container">
                <img src={project.image} className="project-img" alt={project.title} />
                <div className="project-overlay">
                  <div>
                    <h4 className="text-white">{project.title}</h4>
                    <p className="text-muted">Project showcase</p>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.links.view} className="project-link" target="_blank" rel="noopener noreferrer">
                    View Project <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href={project.links.code} className="project-link" target="_blank" rel="noopener noreferrer">
                    Code <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;