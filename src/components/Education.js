// import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Sumathi Reddy Institute of Technology For Women, Warangal",
      duration: "2022 - Present",
      description: "Currently pursuing my BTech with a focus on software development and system design. Coursework includes advanced programming, database systems, computer networks, and software engineering.",
      gpa: "8.43/10"
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "I P S Group of Institutions, Hanamkonda",
      duration: "2020 - 2022",
      description: "Completed higher secondary education with focus on Mathematics, Physics, and Chemistry. Developed strong analytical and problem-solving skills during this period.",
      gpa: "9.66/10"
    },
    {
      degree: "Secondary School (10th Grade)",
      institution: "Fathima girls High School, Warangal",
      duration: "2020",
      description: "Completed secondary education with distinction. Developed foundational knowledge in science and mathematics that paved the way for my engineering career.",
      gpa: "10/10"
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic qualifications</p>
        
        <div className="education-grid">
          {education.map((edu, index) => (
            <div className="glass-card education-card" key={index}>
              <h3 className="education-degree">{edu.degree}</h3>
              <h4 className="education-institution">{edu.institution}</h4>
              <div className="education-duration">{edu.duration}</div>
              <p>{edu.description}</p>
              <span className="education-gpa">GPA: {edu.gpa}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;