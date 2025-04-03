import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useTheme } from '../context/ThemeContext';

const ProjectCard = styled(motion.div)<{ theme: any }>`
  background: ${props => props.theme.cardBg};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: ${props => props.theme.cardShadow};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid ${props => props.theme.border};
`;

const ProjectImage = styled(motion.div)<{ theme: any }>`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  background: ${props => props.theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.theme.border};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const ProjectTitle = styled.h3<{ theme: any }>`
  color: ${props => props.theme.primary};
`;

const ProjectDescription = styled.p<{ theme: any }>`
  color: ${props => props.theme.text};
`;

const TechTag = styled.span<{ theme: any }>`
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  border: 1px solid ${props => props.theme.border};
`;

const LinkButton = styled(motion.a)<{ theme: any; variant: 'primary' | 'secondary' }>`
  background: ${props => props.variant === 'primary' ? props.theme.primary : props.theme.cardBg};
  color: ${props => props.variant === 'primary' ? '#fff' : props.theme.text};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  border: 1px solid ${props => props.theme.border};
`;

const projects = [
  {
    title: 'Onboarding App',
    description: 'A driver assessment application for evaluating potential MAX drivers on traffic rules, regulations, and company best practices.',
    technologies: ['Flutter', 'Firebase', 'Smartlook'],
    image: 'path-to-image', // You'll add this
    github: 'github-link', // You'll add this
    demo: 'demo-link', // You'll add this
  },
  {
    title: 'Automated Solar Powered Incubator',
    description: 'An autonomous shuttle prototype developed at Landmark University with automated operations using Arduino hardware.',
    technologies: ['Arduino', 'Python', 'Hardware'],
    image: 'path-to-image', // You'll add this
    github: 'github-link', // You'll add this
  },
  {
    title: 'Ardels Mobile App',
    description: 'A mobile application enabling companies to register domestic workers and verify their credentials for improved employment opportunities.',
    technologies: ['Flutter', 'Firebase', 'Flutterwave'],
    image: 'path-to-image', // You'll add this
    github: 'github-link', // You'll add this
  },
];

const Projects = () => {
  const { theme } = useTheme();

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          theme={theme}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <ProjectImage
            theme={theme}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </ProjectImage>
          <ProjectTitle theme={theme}>{project.title}</ProjectTitle>
          <ProjectDescription theme={theme}>{project.description}</ProjectDescription>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.technologies.map((tech, idx) => (
              <TechTag key={idx} theme={theme}>
                {tech}
              </TechTag>
            ))}
          </div>
          <ProjectLinks>
            {project.github && (
              <LinkButton
                theme={theme}
                variant="secondary"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </LinkButton>
            )}
            {project.demo && (
              <LinkButton
                theme={theme}
                variant="primary"
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Demo
              </LinkButton>
            )}
          </ProjectLinks>
        </ProjectCard>
      ))}
    </div>
  );
};

export default Projects; 