import React, { useState } from 'react';

import { motion } from 'framer-motion';

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
              <motion.div
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 150
                  }}
                >
                  
                  Proceed
                </motion.div>
            </WhatsappButton>
      }
      
    </Container>
  );
};