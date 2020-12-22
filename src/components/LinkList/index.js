import React from 'react';

import { motion } from 'framer-motion';

import { Container, List, Li, Link } from './styles';

export default function LinkList() {
  return (
    
    <Container>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 120
        }}
      >
        
          <List>
            <Li>
              <Link 
              href="https://www.youtube.com/watch?v=d8Qc8lzT-VM&feature=youtu.be" 
              target="_blank"
              >
                1. Rap do Shinichi
              </Link>
            </Li>
          </List>

          <List>
            <Li>
              <Link 
                href="https://www.youtube.com/watch?v=lcg6wekmCRA&feature=youtu.be" 
                target="_blank"
              >
                2. Unlike Pluto
              </Link>
            </Li>
          </List>

          <List>
            <Li>
              <Link 
                href="https://www.youtube.com/watch?v=bjAOmkxb6PE&list=PLbdb9UXZw33LhVJ7LL3X_eIgdZaBaYLxy" 
                target="_blank"
              >
                3. MC Carol
              </Link>
            </Li>
          </List>

          <List>
            <Li>
              <Link 
                href="https://www.youtube.com/watch?v=Y4HVJvTGbkc&feature=youtu.be" 
                target="_blank"
              >
                4. Feed the Machine
              </Link>
            </Li>
          </List>

          <List>
            <Li>
              <Link 
                href="https://www.youtube.com/watch?v=ZZ5LpwO-An4&feature=youtu.be" 
                target="_blank"
              >
                5. HEYYEYAAE
              </Link>
            </Li>
          </List>
    
    
         <List>
            <Li>
              <Link 
                href="https://www.youtube.com/watch?v=-YmuHTOUYB4" 
                target="_blank"
              >
                6. Gonzaguinha - É
              </Link>
            </Li>
         </List>

          <List>
            <Li>
              <Link 
                href="https://www.youtube.com/watch?v=_P1Gzuu1JrE&feature=youtu.be" 
                target="_blank"
              >
                7. Victor & Leo 
              </Link>
            </Li>
          </List>
          
          <List>
            <Li>
              <Link 
                href="https://www.youtube.com/watch?v=eTvIHmkD8N8" 
                target="_blank"
              >
                8. Érlon Péricles
              </Link>
            </Li>
          </List>

          <List>
            <Li>
              <Link 
                href="https://www.youtube.com/watch?v=KjKVtpTopKQ&feature=youtu.be" 
                target="_blank"
              >
                9. James Blant
              </Link>
            </Li>
          </List>
          
          <List>
            <Li>
              <Link 
                href="https://www.youtube.com/watch?v=jYDq9Jl7tGs" 
                target="_blank"
              >
                10. Luan Santana
              </Link>
            </Li>
          </List>

          <List>
            <Li>
              <Link 
                href="https://www.youtube.com/watch?v=qXpRPjzxnbQ" 
                target="_blank"
              >
                11. Victor & Leo
              </Link>
            </Li>
          </List>

          <List>
            <Li>
              <Link 
                href="https://www.youtube.com/watch?v=O3lKX5Wg2T0" 
                target="_blank"
              >
                12. Rivotril
              </Link>
            </Li>
          </List>

          <List>
            <Li>
              <Link 
                href="https://www.youtube.com/watch?v=NitDpWjW5qI" 
                target="_blank"
              >
                13. Não me jogue pedras
              </Link>
            </Li>
          </List>

          <List>
            <Li>
              <Link 
                href="https://www.youtube.com/watch?v=vlA2XaKfh78&feature=youtu.be" 
                target="_blank"
              >
                14. Doguinho
              </Link>
            </Li>
          </List>
              
      </motion.div>
    </Container>
  );
};
