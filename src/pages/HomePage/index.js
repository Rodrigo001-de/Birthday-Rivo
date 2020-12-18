import React from 'react';

import { Container, Header, Title } from './styles';

import Form from '../../components/Form';

export default function HomePage() {
  return (
    <Container>
      <Header>
        <Title>Hello Rivo</Title>
        <Title>welcome to the game</Title>
      </Header>

      <Form />
    </Container>
  );
};