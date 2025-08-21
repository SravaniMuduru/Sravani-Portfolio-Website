import React from 'react';

const About = () => {
  const technicalSkills = [
    "Java", "Spring Boot", "SQL", "Python", "JavaScript", "HTML/CSS", 
    "Data Structures", "Algorithms", "Database Management System", 
    "Computer Networks", "JSP", "Servlets", "MySQL", "Bootstrap", 
    "JDBC", "Apache Tomcat Server", "Maven"
  ];

  const softSkills = [
    "Communication", "Teamwork", "Problem Solving", "Time Management", 
    "Leadership", "Adaptability", "Critical Thinking", "Presentation Skills"
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>
        
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="glass-card about-content">
              <h3 className="mb-4">Who am I?</h3>
              <p className="about-text">I'm Sravani Muduru, a passionate Computer Science graduate with expertise in Java, SQL, and backend technologies. I specialize in building robust and scalable applications with clean, efficient code.</p>
              <p className="about-text">With strong problem-solving skills and technical analysis capabilities, I'm eager to contribute to software development projects and collaborate with dynamic teams in the evolving tech landscape.</p>
              
              <h4 className="mt-5 mb-3">Career Objective</h4>
              <p className="about-text">Motivated Computer Science graduate with strong expertise in Java, SQL, and backend technologies. Skilled in problem-solving and technical analysis, eager to contribute to software development, system administration, and IT support. Committed to applying knowledge in real-world applications, collaborating in dynamic teams, and continuously growing in the evolving tech landscape.</p>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="glass-card about-content">
              <h3 className="mb-4">Technical Skills</h3>
              <div>
                {technicalSkills.map((skill, index) => (
                  <span key={index} className="skill-badge">{skill}</span>
                ))}
              </div>
              
              <h4 className="mt-5 mb-3">Soft Skills</h4>
              <div>
                {softSkills.map((skill, index) => (
                  <span key={index} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;