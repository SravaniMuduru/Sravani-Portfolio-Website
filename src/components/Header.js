import React from 'react';

const Header = ({ activeSection, isScrolled }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#home" onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }}>Sravani Muduru</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {['home', 'about', 'skills', 'projects', 'experience', 'education', 'achievements', 'contact'].map((section) => (
              <li className="nav-item" key={section}>
                <a 
                  className={`nav-link ${activeSection === section ? 'active' : ''}`} 
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;