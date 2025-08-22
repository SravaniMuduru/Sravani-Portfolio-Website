import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      icon: "fas fa-trophy",
      title: "Perfect 10 CGPA in SSC",
      description: "Secured a perfect score in my Secondary School Certificate examination, demonstrating academic excellence and strong foundational knowledge."
    },
    {
      icon: "fas fa-code",
      title: "500+ Coding Problems Solved",
      description: "Solved over 500 problems across platforms like Smart Interviews, LeetCode, and CodeChef, significantly enhancing my problem-solving and coding proficiency."
    },
    {
      icon: "fas fa-users",
      title: "Technical Team Lead",
      description: "Led an academic project team of 4 members, successfully delivering innovative solutions ahead of schedule while mentoring developers."
    },
    {
      icon: "fas fa-certificate",
      title: "Academic Excellence Awards",
      description: "Received multiple awards for academic performance and project work throughout my engineering education."
    }
  ];

  const certifications = [
//     
  {
  icon: "fas fa-certificate",
  title: "Data Structures and Algorithms",
  description: "Smart Interviews Certification where I developed advanced problem-solving skills, learned efficient algorithm design, and optimized solutions to tackle complex coding challenges.",
  link: "https://smartinterviews.in/certificate/d89ad1b2"
},

{
  icon: "fab fa-html5",
  title: "Web Development Internship",
  description: "Internship at PATH CREATORS where I built responsive and dynamic web applications, designed front-end interfaces using HTML, CSS, JavaScript, and Bootstrap, and implemented backend logic with Java, JSP, Servlets, and MySQL.",
  link: "https://drive.google.com/file/d/1qBI8A_B5YUqsJe87YdRmeSi0NJgGiT8I/view?usp=drive_link"
},

{
  icon: "fab fa-python",
  title: "Data Science and Machine Learning Internship",
  description: "Internship with YBI Foundation where I worked on real datasets, applied Python libraries, and built predictive models, gaining practical exposure to data analysis, machine learning algorithms, and real-world problem-solving techniques.",
  link: "https://drive.google.com/file/d/1iAd-IcoOi7iCufQCWrJ8Kepy-hjUW8Qo/view?usp=drive_link"
}

  ];

  return (
    <section id="achievements" className="section bg-dark">
      <div className="container">
        <h2 className="section-title">Achievements & Certifications</h2>
        <p className="section-subtitle">My accomplishments and credentials</p>
        
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div className="glass-card achievement-card" key={index}>
              <div className="achievement-icon">
                <i className={achievement.icon}></i>
              </div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-5">
          <h3 className="text-center mb-4">Certifications</h3>
          <div className="achievements-grid">
            {certifications.map((cert, index) => (
              <div className="glass-card achievement-card" key={index}>
                <div className="achievement-icon">
                  <i className={cert.icon}></i>
                </div>
                <h3 className="achievement-title">{cert.title}</h3>
                <p className="achievement-description">{cert.description}</p>
                <a href={cert.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Certificate <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;