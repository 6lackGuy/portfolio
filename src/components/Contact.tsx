import { FC } from 'react';
import styled from '@emotion/styled';
import { FaPhone, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = styled.section`
  margin-top: 6rem;
  padding: 4rem 0;
`;

const ContactTitle = styled.h2`
  font-size: 3rem;
  color: #FFFFFF;
  margin-bottom: 2rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  svg {
    color: #FFA500;
    font-size: 1.5rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContactLabel = styled.span`
  color: #999;
  font-size: 0.9rem;
`;

const ContactValue = styled.a`
  color: #FFFFFF;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    color: #FFA500;
  }
`;

const Contact: FC = () => {
  return (
    <ContactSection id="contact">
      <ContactTitle>Contact</ContactTitle>
      <ContactGrid>
        <ContactItem>
          <FaPhone />
          <ContactInfo>
            <ContactLabel>Phone</ContactLabel>
            <ContactValue href="tel:+2349115301259">(234) 911-530-1259</ContactValue>
          </ContactInfo>
        </ContactItem>

        <ContactItem>
          <FaEnvelope />
          <ContactInfo>
            <ContactLabel>Email</ContactLabel>
            <ContactValue href="mailto:adjuyaa@gmail.com">adjuyaa@gmail.com</ContactValue>
          </ContactInfo>
        </ContactItem>

        <ContactItem>
          <FaLinkedin />
          <ContactInfo>
            <ContactLabel>LinkedIn</ContactLabel>
            <ContactValue href="https://www.linkedin.com/in/calebadjuya/" target="_blank" rel="noopener noreferrer">
              View Profile
            </ContactValue>
          </ContactInfo>
        </ContactItem>

        <ContactItem>
          <FaMapMarkerAlt />
          <ContactInfo>
            <ContactLabel>Location</ContactLabel>
            <ContactValue as="span">Sangotedo, Lagos, Nigeria</ContactValue>
          </ContactInfo>
        </ContactItem>
      </ContactGrid>
    </ContactSection>
  );
};

export default Contact; 
