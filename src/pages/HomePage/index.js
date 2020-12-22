import React from 'react';

import { motion } from 'framer-motion';

import { Container, Header, Title } from './styles';

import Form from '../../components/Form';

export default function HomePage() {
  return (
    <Container>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 60
        }}
      >
        <Header>
          <Title>Hello Rivo</Title>
          <Title>welcome to the game</Title>
        </Header>

      </motion.div>
      <Form />
    </Container>
  );
};