import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './views/Home';
import About from './views/About';
import Portfolio from './views/Portfolio';
import Certifications from './views/Certifications';
import Contact from './views/Contact';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #ffffff;
`;

const MainContent = styled(motion.main)`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App; 