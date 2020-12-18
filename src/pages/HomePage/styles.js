import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;

  background: #191622;
`;

export const Header = styled.header`
  margin-top: 30px;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const Title = styled.h1`
  color: #00ffff;
  
  font-size: 35px;
  font-weight: 700;

  @media(max-width: 600px) {
    font-size: 16px;
  }
`;

