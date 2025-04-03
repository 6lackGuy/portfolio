import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const SparkleIcon = styled(motion.div)`
  position: absolute;
  width: 24px;
  height: 24px;
  color: #FFA500;
  opacity: 0.6;
`;

const SparkleComponent = () => {
  return (
    <>
      <SparkleIcon
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: [0.5, 1, 0.5], opacity: [0, 0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ top: '10%', left: '10%' }}
      >
        ✦
      </SparkleIcon>
      <SparkleIcon
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: [0.5, 1, 0.5], opacity: [0, 0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        style={{ top: '20%', right: '15%' }}
      >
        ✦
      </SparkleIcon>
      <SparkleIcon
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: [0.5, 1, 0.5], opacity: [0, 0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        style={{ bottom: '30%', left: '20%' }}
      >
        ✦
      </SparkleIcon>
      <SparkleIcon
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: [0.5, 1, 0.5], opacity: [0, 0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        style={{ bottom: '15%', right: '10%' }}
      >
        ✦
      </SparkleIcon>
    </>
  );
};

export default SparkleComponent; 