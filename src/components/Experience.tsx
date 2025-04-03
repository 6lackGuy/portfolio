import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useTheme } from '../context/ThemeContext';

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ExperienceCard = styled(motion.div)<{ theme: any }>`
  background: ${props => props.theme.cardBg};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: ${props => props.theme.cardShadow};
  border: 1px solid ${props => props.theme.border};
`;

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const BulletPoint = styled.li<{ theme: any }>`
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
  color: ${props => props.theme.text};

  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${props => props.theme.primary};
  }
`;

const CompanyName = styled.h3<{ theme: any }>`
  color: ${props => props.theme.primary};
  margin-bottom: 0.5rem;
`;

const Position = styled.p<{ theme: any }>`
  color: ${props => props.theme.secondary};
`;

const Period = styled.p<{ theme: any }>`
  color: ${props => props.theme.secondary};
  text-align: right;
`;

const Location = styled.p<{ theme: any }>`
  color: ${props => props.theme.secondary};
  text-align: right;
`;

const experiences = [
  {
    company: 'Metro Africa Xpress (MAXng)',
    position: 'Flutter Mobile App Developer',
    period: 'October 2023 - Present',
    location: 'Lagos, Nigeria',
    achievements: [
      'Developed and deployed a cutting-edge application to digitize and optimize champion onboarding processes',
      'Reduced App Down time from 3 hours to 1 hour, elevating onboarding success rate by 30%',
      'Built a customer Onboarding Test app evaluating customers readiness to become a Max Champion',
      'Spearheaded Mobile application deployment of Updates and New apps to Google Play Store',
      'Implemented Smartlook integration for application analytics and bug tracking',
      'Built location-specific features for Cameroon, Nigeria, and Ghana',
      'Integrated Youverify API for user identification',
    ],
  },
  {
    company: 'Artifex Consumer Technologies Ltd',
    position: 'Mobile App Developer',
    period: 'January 2022 - December 2022',
    location: 'Lagos, Nigeria',
    achievements: [
      'Built Customer and Artisan App from Start to finish',
      'Integrated Google Maps API and Google Places for location tracking',
      'Implemented Push-Notifications with Firebase',
      'Integrated In-app payment with Flutterwave',
    ],
  },
  {
    company: 'MAXng',
    position: 'Flutter Mobile App Developer Intern',
    period: 'April 2023 - October 2023',
    location: 'Lagos, Nigeria',
    achievements: [
      'Managed Operations and Bug Fixes of Onboarding Mobile Application',
      'Maintained Existing Mobile codebase and upgraded legacy code',
      'Assisted in Ensuring Fluid Communication between Mobile and Backend Team',
    ],
  },
];

const Experience = () => {
  const { theme } = useTheme();

  return (
    <ExperienceContainer>
      {experiences.map((exp, index) => (
        <ExperienceCard
          key={index}
          theme={theme}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <CompanyHeader>
            <div>
              <CompanyName theme={theme}>{exp.company}</CompanyName>
              <Position theme={theme}>{exp.position}</Position>
            </div>
            <div>
              <Period theme={theme}>{exp.period}</Period>
              <Location theme={theme}>{exp.location}</Location>
            </div>
          </CompanyHeader>
          <ul>
            {exp.achievements.map((achievement, idx) => (
              <BulletPoint key={idx} theme={theme}>
                {achievement}
              </BulletPoint>
            ))}
          </ul>
        </ExperienceCard>
      ))}
    </ExperienceContainer>
  );
};

export default Experience; 