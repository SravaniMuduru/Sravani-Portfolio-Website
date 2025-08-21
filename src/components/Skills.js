import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBars = entry.target.querySelectorAll('.progress-bar');
          progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            // Reset width to 0 first
            bar.style.width = '0';
            // Trigger animation to target width
            setTimeout(() => {
              bar.style.width = targetWidth;
            }, 100);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: "85%" },
        { name: "Python", level: "75%" },
        { name: "JavaScript", level: "70%" },
        { name: "SQL", level: "80%" }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML/CSS", level: "85%" },
        { name: "Spring Boot", level: "60%" },
        { name: "JSP/Servlets", level: "70%" },
        { name: "Bootstrap", level: "70%" }
      ]
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "Data Structures", level: "85%" },
        { name: "Algorithms", level: "72%" },
        { name: "Database Management", level: "83%" },
        { name: "Computer Networks", level: "75%" }
      ]
    },
    {
      title: "Tools & Software",
      skills: [
        { name: "Git/GitHub", level: "80%" },
        { name: "MySQL", level: "75%" },
        { name: "Eclipse IDE", level: "88%" },
        { name: "VS Code", level: "82%" }
      ]
    }
  ];

  return (
    <section id="skills" className="section bg-dark">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">My technical proficiency and expertise</p>
        
        <div className="glass-card" ref={skillsRef}>
          <div className="skills-container">
            {skillCategories.map((category, index) => (
              <div className="skill-category" key={index}>
                <h3 className="skill-category-title">{category.title}</h3>
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <div className="skill-name">
                      <span>{skill.name}</span>
                      <span>{skill.level}</span>
                    </div>
                    <div className="progress">
                      <div 
                        className="progress-bar" 
                        role="progressbar" 
                        data-width={skill.level}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;