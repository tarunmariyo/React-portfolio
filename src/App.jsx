import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './views/Home';
import About from './views/About';
import Portfolio from './views/Portfolio';
import Certifications from './views/Certifications';
import Contact from './views/Contact';
import backgroundImage from './assets/background.jpg';

const AppContainer = styled.div`
  min-height: 100vh;
  background: 
    linear-gradient(
      135deg,
      rgba(13, 17, 23, 0.85) 0%,
      rgba(0, 40, 60, 0.75) 50%,
      rgba(0, 12, 20, 0.8) 100%
    ),
    url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: #ffffff;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(
        circle at 50% 50%,
        rgba(0, 255, 255, 0.05) 0%,
        rgba(0, 0, 0, 0) 50%
      );
    pointer-events: none;
  }
`;

const MainContent = styled(motion.main)`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <MainContent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainContent>
    </AppContainer>
  );
}

export default App; 