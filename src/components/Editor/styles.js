import styled from 'styled-components';

export const Container = styled.div`
  background: #eee;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

  textarea {
    background: red !important;
  }
`;

export const Action = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  
  button {
    height: 40px;
    padding: 10px;
    border: 0;
    font-size: 16px;
    letter-spacing: 2px;
    border-radius: 10px;
    font-weight: bold;
    background: #7159c1;
    color: #fff;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  label {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }

  input {
    height: 38px;
    border-radius: 10px;
    border: 0;
    background: #fff;
    padding: 5px;
    font-size: 18px;
  }
`;
