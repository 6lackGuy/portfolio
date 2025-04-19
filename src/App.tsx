import styled from '@emotion/styled';
import { FaArrowRight } from 'react-icons/fa';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Sparkle from './components/Sparkle';
import { lightTheme } from './styles/theme';

const Container = styled.div<{ theme: any }>`
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Nav = styled.nav<{ theme: any }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${props => props.theme.navBg};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props: { theme: typeof lightTheme }) => props.theme.primary};
    }
  }
`;

const Logo = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Hero = styled.div`
  text-align: center;
  padding: 4rem 0;
  position: relative;
`;

const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 2rem;
  overflow: hidden;
  border: 2px solid #FFA500;
`;

const Title = styled.h1`
  font-size: 3rem;
  background: linear-gradient(90deg, #4CAF50, #2196F3, #FF7F50);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  font-weight: bold;
  background-size: 200% auto;
  animation: gradient 3s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #FFFFFF;
  margin-bottom: 2rem;
`;

const Bio = styled.p`
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  color: #CCCCCC;
  white-space: pre-line;
  text-align: left;

  strong {
    color: #FFA500;
  }

  .emoji {
    margin: 0 0.2rem;
  }
`;

const WorksSection = styled.section`
  margin-top: 6rem;
`;

const WorksHeader = styled.div`
  margin-bottom: 3rem;
`;

const WorksTitle = styled.h2`
  font-size: 3rem;
  color: #FFFFFF;
  margin-bottom: 1rem;
`;

const WorksDescription = styled.p`
  color: #CCCCCC;
`;

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProjectItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #333;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ProjectTitle = styled.h3`
  color: #FFFFFF;
  font-size: 1.2rem;
`;

const ProjectTags = styled.div`
  display: flex;
  gap: 1rem;
  color: #666;
`;

const AppContent = () => {
  return (
    <Container theme={useTheme().theme}>
      <Nav theme={useTheme().theme}>
        <Logo href="#">Home</Logo>
        <NavLinks theme={useTheme().theme}>
          <a href="#about">About</a>
          <a href="#resume">Resume</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </NavLinks>
      </Nav>

      <ContentWrapper>
        <Hero>
          <Sparkle />
          <ProfileImage>
            {/* Add your profile image here */}
          </ProfileImage>
          <Title>Flutter App Developer</Title>
          <Subtitle>Hi I'm Adjuya Avwerosuo Caleb ツ</Subtitle>
          <Bio>
            {/* <strong>🚀 Flutter App Developer | Tech Enthusiast | Anime Binger</strong> */}

Hey there! I'm a Flutter App Developer with 3 years of experience, crafting sleek and high-performance mobile apps straight outta Lagos. I'm all about building innovative solutions that don't just work but feel amazing to use!

When I'm not bringing ideas to life with code, you'll probably find me:

<span className="emoji">🏀</span> Breaking ankles on the basketball court
<span className="emoji">💪</span> Hitting the gym like I'm training for a tech-powered superhero movie
<span className="emoji">👨‍🏫</span> Teaching kids how to code (because the future needs more cool devs)
<span className="emoji">🎥</span> Binge-watching anime like my life depends on it

Let's build something awesome together! <span className="emoji">🚀</span><span className="emoji">🔥</span>
          </Bio>
        </Hero>

        <About />
        <Resume />

        <WorksSection>
          <WorksHeader>
            <WorksTitle>My Works</WorksTitle>
            <WorksDescription>
              The work I do, and the projects I've helped build.
            </WorksDescription>
          </WorksHeader>

          <ProjectsList>
            <ProjectItem>
              <ProjectInfo>
                <ProjectTitle>MAX Onboarding App</ProjectTitle>
                <ProjectTags>
                  <span>Flutter</span>
                  <span>•</span>
                  <span>Mobile App</span>
                  <span>•</span>
                  <span>UI/UX</span>
                </ProjectTags>
              </ProjectInfo>
              <FaArrowRight color="#FFA500" />
            </ProjectItem>

            <ProjectItem>
              <ProjectInfo>
                <ProjectTitle>Ardels Domestic Workers Platform</ProjectTitle>
                <ProjectTags>
                  <span>Flutter</span>
                  <span>•</span>
                  <span>Mobile App</span>
                  <span>•</span>
                  <span>Firebase</span>
                </ProjectTags>
              </ProjectInfo>
              <FaArrowRight color="#FFA500" />
            </ProjectItem>

            <ProjectItem>
              <ProjectInfo>
                <ProjectTitle>Artifex Consumer App</ProjectTitle>
                <ProjectTags>
                  <span>Flutter</span>
                  <span>•</span>
                  <span>Mobile App</span>
                  <span>•</span>
                  <span>Google Maps</span>
                </ProjectTags>
              </ProjectInfo>
              <FaArrowRight color="#FFA500" />
            </ProjectItem>

            <ProjectItem>
              <ProjectInfo>
                <ProjectTitle>Automated Solar Powered Incubator</ProjectTitle>
                <ProjectTags>
                  <span>Arduino</span>
                  <span>•</span>
                  <span>Hardware</span>
                  <span>•</span>
                  <span>Automation</span>
                </ProjectTags>
              </ProjectInfo>
              <FaArrowRight color="#FFA500" />
            </ProjectItem>
          </ProjectsList>
        </WorksSection>

        <Contact />
      </ContentWrapper>
    </Container>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
