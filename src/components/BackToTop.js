import React from 'react';

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a href="#" className="back-to-top" onClick={(e) => {
      e.preventDefault();
      scrollToTop();
    }}>
      <i className="fas fa-arrow-up"></i>
    </a>
  );
};

export default BackToTop;