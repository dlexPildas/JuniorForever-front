import styled from 'styled-components';

export const Container = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media(max-width: 720px) {
    img {
      width: 100%;
      height: 100%;
    }
  }
`;