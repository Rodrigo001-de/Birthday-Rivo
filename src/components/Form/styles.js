import styled from 'styled-components';

export const Container = styled.div`
  height: 96vh;
  width: 96vw;
  
  margin-top: 36px;
  padding: 30px;
  
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const Text = styled.label`
  color: #F0F0F0;
  font-size: 26px;

  margin-bottom: 36px;

  @media(max-width: 600px) {
    font-size: 16px;
  };
`;

export const Input = styled.input`
  color: #0F0F0F;
  font-size: 16px;

  border-radius: 10px;
  outline: none;

  text-align: center;

  @media(max-width: 600px) {
    width: 186px;
  };
`;

export const WhatsappButton = styled.a`
  margin-top: 30px;
  
  height: 50px;
  width: 180px;

  font-size: 30px;
  font-weight: 700;

  text-align: center;
  text-decoration: none;

  border-radius: 20px;

  cursor: pointer;

  color: #00FFFF;
  background: #191970;
`;