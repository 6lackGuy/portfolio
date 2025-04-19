import { FC } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ResumeSection = styled.section`
  margin-top: 6rem;
  padding: 4rem 0;
`;

const ResumeTitle = styled.h2`
  font-size: 3rem;
  color: #FFFFFF;
  margin-bottom: 2rem;
`;

const ResumeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ResumeCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 2rem;
`;

const CardTitle = styled.h3`
  color: #FFA500;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ExperienceItem = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CompanyName = styled.h4`
  color: #FFFFFF;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const JobTitle = styled.h5`
  color: #FFA500;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Duration = styled.p`
  color: #999;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Description = styled.ul`
  color: #CCCCCC;
  padding-left: 1.5rem;
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const SkillCategory = styled.div`
  margin-bottom: 1.5rem;
`;

const SkillTitle = styled.h4`
  color: #FFA500;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const SkillList = styled.ul`
  color: #CCCCCC;
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:before {
      content: "•";
      color: #FFA500;
    }
  }
`;

const Resume: FC = () => {
  return (
    <ResumeSection id="resume">
      <ResumeTitle>Resume</ResumeTitle>
      <ResumeGrid>
        <ResumeCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <CardTitle>Experience</CardTitle>
          <ExperienceItem>
            <CompanyName>Metro Africa Xpress (MAXng)</CompanyName>
            <JobTitle>Flutter Mobile App Developer</JobTitle>
            <Duration>October 2023 - Present</Duration>
            <Description>
              <li>Developed and deployed a cutting-edge application for champion onboarding processes</li>
              <li>Reduced App Down time from 3 hours to 1 hour</li>
              <li>Built a customer Onboarding Test app</li>
              <li>Spearheaded Mobile application deployment</li>
              <li>Implemented Smartlook integration for analytics</li>
            </Description>
          </ExperienceItem>

          <ExperienceItem>
            <CompanyName>Artifex Consumer Technologies Ltd</CompanyName>
            <JobTitle>Mobile App Developer</JobTitle>
            <Duration>January 2022 - December 2022</Duration>
            <Description>
              <li>Built Customer and Artisan App from start to finish</li>
              <li>Integrated Google Maps API and location services</li>
              <li>Implemented Firebase Push-Notifications</li>
              <li>Integrated Flutterwave payment system</li>
            </Description>
          </ExperienceItem>
        </ResumeCard>

        <ResumeCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <CardTitle>Skills & Education</CardTitle>
          <SkillCategory>
            <SkillTitle>Technical Skills</SkillTitle>
            <SkillsGrid>
              <SkillList>
                <li>Dart</li>
                <li>Python</li>
                <li>Flutter</li>
                <li>Firebase</li>
              </SkillList>
              <SkillList>
                <li>GetX</li>
                <li>Provider</li>
                <li>RiverPod</li>
                <li>Bloc</li>
              </SkillList>
            </SkillsGrid>
          </SkillCategory>

          <SkillCategory>
            <SkillTitle>Tools</SkillTitle>
            <SkillList>
              <li>Android Studio</li>
              <li>VS Code</li>
              <li>Git & GitHub</li>
              <li>Figma</li>
            </SkillList>
          </SkillCategory>

          <SkillCategory>
            <SkillTitle>Education</SkillTitle>
            <CompanyName>Landmark University</CompanyName>
            <JobTitle>B.Eng Mechanical Engineering</JobTitle>
            <Duration>September 2017 - November 2022</Duration>
          </SkillCategory>
        </ResumeCard>
      </ResumeGrid>
    </ResumeSection>
  );
};

export default Resume; 
