import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const CertificationsSection = styled.section`
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

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CertificationCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
`;

const CertificationIcon = styled.div`
  font-size: 2.5rem;
  color: #4ecdc4;
  margin-bottom: 1rem;
`;

const CertificationTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const CertificationDetails = styled.div`
  color: #a0a0a0;
  margin-bottom: 1rem;
`;

const CertificationDate = styled.p`
  color: #4ecdc4;
  font-size: 0.9rem;
`;

// Sample certification data - replace with your actual certifications
const certifications = [
  {
    id: 1,
    title: 'iOS Development Certification',
    issuer: 'Apple Developer Academy',
    date: '2023',
    description: 'Comprehensive training in iOS app development using Swift and SwiftUI.',
  },
  {
    id: 2,
    title: 'UI/UX Design Certification',
    issuer: 'Interaction Design Foundation',
    date: '2022',
    description: 'Advanced course in user interface and experience design principles.',
  },
  {
    id: 3,
    title: 'Swift Programming Certification',
    issuer: 'Udemy',
    date: '2022',
    description: 'Mastery of Swift programming language and iOS development fundamentals.',
  },
];

const Certifications = () => {
  return (
    <CertificationsSection>
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Certifications
      </SectionTitle>
      <CertificationsGrid>
        {certifications.map((certification, index) => (
          <CertificationCard
            key={certification.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <CertificationIcon>
              <FaCertificate />
            </CertificationIcon>
            <CertificationTitle>{certification.title}</CertificationTitle>
            <CertificationDetails>
              <p>{certification.issuer}</p>
              <p>{certification.description}</p>
            </CertificationDetails>
            <CertificationDate>{certification.date}</CertificationDate>
          </CertificationCard>
        ))}
      </CertificationsGrid>
    </CertificationsSection>
  );
};

export default Certifications; 