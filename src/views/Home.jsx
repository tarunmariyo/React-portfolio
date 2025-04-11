import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaApple, FaReact, FaCode } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  color: #a0a0a0;
  margin-bottom: 2rem;
`;

const SkillsContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillIcon = styled(motion.div)`
  font-size: 2rem;
  color: #4ecdc4;
`;

const Home = () => {
  return (
    <HeroSection>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Tarun Kumar
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        iOS Developer & App Designer
      </Subtitle>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ maxWidth: '600px', lineHeight: '1.6' }}
      >
        A passionate 3rd year student from Galgotias University, specializing in iOS development
        and app design. Creating beautiful and functional applications is my passion.
      </motion.p>
      <SkillsContainer>
        <SkillIcon
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaApple />
        </SkillIcon>
        <SkillIcon
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaReact />
        </SkillIcon>
        <SkillIcon
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaCode />
        </SkillIcon>
      </SkillsContainer>
    </HeroSection>
  );
};

export default Home; 