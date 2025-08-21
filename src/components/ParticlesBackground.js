import React, { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    if (particlesRef.current && window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#00f2fe"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.5,
            random: true
          },
          size: {
            value: 3,
            random: true
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#00f2fe",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "push"
            }
          }
        },
        retina_detect: true
      });
    }
  }, []);

  return <div id="particles-js" ref={particlesRef}></div>;
};

export default ParticlesBackground;