import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: 'Fitness Tracker App',
    description: 'A comprehensive fitness tracking application with workout plans and progress monitoring.',
    image: '/path-to-your-image-1.jpg', // Replace with your actual image paths
  },
  {
    id: 2,
    title: 'E-commerce App',
    description: 'Modern e-commerce platform with smooth user experience and secure payment integration.',
    image: '/path-to-your-image-2.jpg', // Replace with your actual image paths
  },
  {
    id: 3,
    title: 'Social Media App',
    description: 'Social networking application with real-time updates and interactive features.',
    image: '/path-to-your-image-3.jpg', // Replace with your actual image paths
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
        My Portfolio
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