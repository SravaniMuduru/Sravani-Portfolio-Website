import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'skills', text: 'Skills' },
    { id: 'projects', text: 'Projects' },
    { id: 'experience', text: 'Experience' },
    { id: 'education', text: 'Education' },
    { id: 'contact', text: 'Contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">Sravani Muduru</div>
        <p className="footer-text">Java Full Stack Developer specializing in building robust backend systems with elegant frontend interfaces. Passionate about creating efficient, scalable solutions.</p>
        
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/sravani-muduru-596a712aa" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/SravaniMuduru" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
        
        <div className="footer-links">
          {footerLinks.map((link, index) => (
            <a 
              key={index} 
              href={`#${link.id}`} 
              className="footer-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
            >
              {link.text}
            </a>
          ))}
        </div>
        
        <p className="footer-copyright">© 2025 Sravani Muduru. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;