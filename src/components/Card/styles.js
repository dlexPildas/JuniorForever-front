import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-width: 300px;
  height: 350px;
  margin: 30px;
  padding: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  border-radius: 24px;
  background: #eee;
  
  cursor: pointer;

  &:hover {
    transform: translateY(-10px)
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    letter-spacing: 1px;
    font-size: 24px;
    border-radius: 10px;
    padding: 5px;
    line-height: 40px;
  }

  @media(max-width: 1128px){
    max-width: 100%;
    height: 200px;

    h1 {
      font-size: 24px;
    }

    p {
      font-size: 18px;
      line-height: 20px;
    }
  }
`;

export const AuthorDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  font-weight: bold;
  
  span {
    background: #7159c1;
    padding: 5px;
    border-radius: 10px;
    color: #fff;
  }
  @media(max-width: 1128px){

    h1 {
      font-size: 24px;
    }

    span {
      font-size: 16px;
    }
  }
`;
