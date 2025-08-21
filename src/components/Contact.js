import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      content: "Warangal, Telangana, India"
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      content: "sravanimuduru17@gmail.com",
      link: "mailto:sravanimuduru17@gmail.com"
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      content: "+91 9063061278",
      link: "tel:+919063061278"
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      content: "github.com/SravaniMuduru",
      link: "https://github.com/SravaniMuduru"
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      content: "linkedin.com/in/sravanimuduru",
      link: "https://www.linkedin.com/in/sravani-muduru-596a712aa/"
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's work together or just say hello!</p>
        
        <div className="contact-container">
          <div className="glass-card contact-info-card">
            <h3 className="contact-info-title">Contact Information</h3>
            
            {contactInfo.map((info, index) => (
              <div className="contact-info-item" key={index}>
                <div className="contact-info-icon">
                  <i className={info.icon}></i>
                </div>
                <div className="contact-info-text">
                  <h5>{info.title}</h5>
                  {info.link ? (
                    <a href={info.link} target="_blank" rel="noopener noreferrer">{info.content}</a>
                  ) : (
                    <p>{info.content}</p>
                  )}
                </div>
              </div>
            ))}
            
            <div className="mt-5">
              <h5 className="mb-3">Working Hours</h5>
              <p>Monday - Friday: 9am - 6pm</p>
              <p>Weekends: Available for special projects</p>
            </div>
          </div>
          
          <div className="glass-card contact-form">
            <h3 className="contact-info-title">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Your Name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Your Email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <textarea 
                  className="form-control" 
                  placeholder="Your Message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary-custom w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;