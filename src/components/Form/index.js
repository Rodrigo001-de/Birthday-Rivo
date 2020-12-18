import React, { useState } from 'react';

import { Container, Text, Input, WhatsappButton } from './styles';

import LinkList from '../../components/LinkList';

export default function Form() {
  const [ password, setPassword ] = useState('');

  return (
    <Container>
      <Text>Enter password</Text>
      
      <Input 
        value={password} 
        onChange={
          event => setPassword(event.target.value)
        } 
      />
        
      {
        password !== 'Rivo22/12'
          ? <LinkList />
          : <WhatsappButton href="https://chat.whatsapp.com/FHbXxrGHbuoFIdn69hBxXO" >
              Proceed
            </WhatsappButton>
      }
      
    </Container>
  );
};