import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;
  
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const List = styled.ul`
  display: flex;

  align-items: center;

  padding-bottom: 6px;
`;

export const Li = styled.li`
  list-style: none;

  padding: 0 0 0 16px;

  @media(max-width: 600px) {
    padding: 0;
  };
`;

export const Link = styled.a`
  font-size: 18px;
  font-weight: 700;

  color: #00FFFF;
  
  text-decoration: none;

  padding-right: 10px;
  padding-left: 18px;
`;