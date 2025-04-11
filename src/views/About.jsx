import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 4rem 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const InfoCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  backdrop-filter: blur(10px);
`;

const Icon = styled.div`
  font-size: 2rem;
  color: #4ecdc4;
  margin-bottom: 1rem;
`;

const About = () => {
  return (
    <AboutSection>
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </SectionTitle>
      <ContentContainer>
        <InfoCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3>Personal Information</h3>
          <p>
            I am Tarun Kumar, a 3rd year student at Galgotias University pursuing my passion for
            technology and design. My journey in iOS development and app design has been driven by
            my love for creating intuitive and beautiful user experiences.
          </p>
        </InfoCard>

        <InfoCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3>Education</h3>
          <p>
            Currently pursuing my Bachelor's degree at Galgotias University, where I'm gaining
            comprehensive knowledge in software development and design principles.
          </p>
        </InfoCard>

        <SkillsGrid>
          <SkillCard
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Icon>
              <FaMobileAlt />
            </Icon>
            <h4>iOS Development</h4>
            <p>Swift, UIKit, SwiftUI</p>
          </SkillCard>

          <SkillCard
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Icon>
              <FaLaptopCode />
            </Icon>
            <h4>App Design</h4>
            <p>UI/UX, Figma, Adobe XD</p>
          </SkillCard>

          <SkillCard
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Icon>
              <FaGraduationCap />
            </Icon>
            <h4>Education</h4>
            <p>Galgotias University</p>
          </SkillCard>
        </SkillsGrid>
      </ContentContainer>
    </AboutSection>
  );
};

export default About; 