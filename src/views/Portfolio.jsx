import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import hmsimage from '../assets/hms.png'
import arflashcardimage from '../assets/arflashcard.png'
import leolingoimage from '../assets/leolingo.png'

const PortfolioSection = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  backdrop-filter: blur(10px);
`;

const ProjectImage = styled(motion.img)`
width: 100%;
height: 200px;
object-fit: cover;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
display: block;
`;


const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const ProjectDescription = styled.p`
  color: #a0a0a0;
  line-height: 1.6;
`;


const projects = [
  {
    id: 1,
    title: 'Hospital Management System',
    description: 'A responsive Hospital Management System designed to streamline patient, doctor, admin and super admin workflows with modern UI and role-based access..',
    image: hmsimage,
  },
  {
    id: 2,
    title: 'AR-Flashcards',
    description: 'An interactive AR Flashcard App that helps kids learn words through voice recognition, animations, and engaging AR visuals.',
    image: arflashcardimage,
  },
  {
    id: 3,
    title: 'LeoLingo',
    description: 'LeoLingo is a fun, interactive speech therapy app that helps kids improve their speaking skills through games, songs, and voice-based activities..',
    image: leolingoimage,
  },
];

const Portfolio = () => {
  return (
    <PortfolioSection>
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </SectionTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <ProjectImage
              src={project.image}
              alt={project.title}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </PortfolioSection>
  );
};

export default Portfolio; 