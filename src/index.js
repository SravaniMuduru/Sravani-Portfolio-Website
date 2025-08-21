import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './App.css';

// Initialize AOS when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  if (window.AOS) {
    window.AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
});

// Get the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);