import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled(motion.form)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 1rem;

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #ffffff;
  text-decoration: none;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Icon = styled.div`
  font-size: 1.5rem;
  color: #4ecdc4;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <ContactSection>
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </SectionTitle>
      <ContactContainer>
        <ContactForm
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
        >
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </SubmitButton>
        </ContactForm>

        <SocialLinks
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SocialLink
            href="https://github.com/tarunmariyo"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 10 }}
          >
            <Icon>
              <FaGithub />
            </Icon>
            GitHub
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/tarun-kumar-2a9491295/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 10 }}
          >
            <Icon>
              <FaLinkedin />
            </Icon>
            LinkedIn
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/mariya_tarun/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 10 }}
          >
            <Icon>
              <FaInstagram />
            </Icon>
            Instagram
          </SocialLink>
          <SocialLink
            href="mailto:tarunmariya320@gmail.com"
            whileHover={{ x: 10 }}
          >
            <Icon>
              <FaEnvelope />
            </Icon>
            Email
          </SocialLink>
        </SocialLinks>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 