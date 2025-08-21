import React, { useEffect, useRef } from 'react';

const Home = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    // Check if Typed is available globally (from CDN)
    if (typingRef.current && window.Typed) {
      const typed = new window.Typed(typingRef.current, {
        strings: ["Java Developer", "Backend Specialist", "Problem Solver", "Full Stack Developer"],
        typeSpeed: 70,
        backSpeed: 60,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true
      });
      return () => typed.destroy();
    }
  }, []);

  return (
    <section id="home" className="student">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-1 order-2">
            <h1 className="student-title">Hello, I'm <span className="text-primary">Sravani Muduru</span></h1>
            <h2 className="student-subtitle">I'm a <span className="typing-text" ref={typingRef}></span></h2>
            <p className="student-description">Specializing in building robust backend systems with Java and Spring Boot, while crafting intuitive frontend experiences. Passionate about solving complex problems with elegant solutions.</p>
            <div className="student-buttons">
              <a href="#contact" className="btn btn-primary-custom me-3">Hire Me</a>
              <a href="#projects" className="btn btn-outline-custom">View Work</a>
            </div>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/sravani-muduru-596a712aa" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/SravaniMuduru" className="social-icon"><i className="fab fa-github"></i></a>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1 text-center mb-5 mb-lg-0">
            <div className="profile-container">
              <img src={`${process.env.PUBLIC_URL}/assets/profilepic.jpg`} alt="Sravani Muduru" className="profile-img img-fluid" />
              <div className="profile-decoration"></div>
              <div className="profile-decoration"></div>
              <div className="profile-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;