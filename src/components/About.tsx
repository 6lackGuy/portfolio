import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FC } from 'react';

const AboutSection = styled.section`
  margin-top: 6rem;
  padding: 4rem 0;
`;

const AboutTitle = styled.h2`
  font-size: 3rem;
  color: #FFFFFF;
  margin-bottom: 2rem;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem;
`;

const AboutText = styled.div`
  color: #CCCCCC;
  line-height: 1.8;

  p {
    margin-bottom: 1.5rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`;

const StatNumber = styled.h3`
  font-size: 2.5rem;
  color: #FFA500;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  color: #FFFFFF;
  font-size: 1rem;
`;

const About: FC = () => {
  return (
    <AboutSection id="about">
      <AboutTitle>About Me</AboutTitle>
      <AboutContent>
        <AboutText>
          <p>
            As a Flutter App Developer with 3 years of experience, I've had the privilege of working 
            on diverse and challenging projects that have shaped my expertise in mobile application 
            development. My journey in software development has been driven by a passion for creating 
            intuitive and efficient mobile solutions.
          </p>
          <p>
            At Metro Africa Xpress (MAXng), I've played a key role in developing and optimizing 
            the champion onboarding process, significantly improving operational efficiency and 
            user experience. My work has directly contributed to supporting 3000+ onboardings 
            per month while maintaining high quality standards.
          </p>
          <p>
            I believe in writing clean, maintainable code and staying updated with the latest 
            industry trends and best practices. My technical expertise spans across Flutter, 
            Dart, state management solutions, and various mobile development tools and frameworks.
          </p>
        </AboutText>
        <StatsGrid>
          <StatCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <StatNumber>3+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatCard>
          <StatCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <StatNumber>10+</StatNumber>
            <StatLabel>Projects Completed</StatLabel>
          </StatCard>
          <StatCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <StatNumber>3K+</StatNumber>
            <StatLabel>Users Impacted</StatLabel>
          </StatCard>
          <StatCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <StatNumber>5+</StatNumber>
            <StatLabel>Technologies</StatLabel>
          </StatCard>
        </StatsGrid>
      </AboutContent>
    </AboutSection>
  );
};

export default About; 
