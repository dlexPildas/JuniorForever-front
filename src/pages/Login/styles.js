import styled, {keyframes, css} from 'styled-components';
import { shade } from  'polished'

import login from '../../assets/game.jpg';

const rotate = keyframes`
    from {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(360deg)
    }
`;


export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div.attrs(props => ({
  isFocused: props.isFocus
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;

  img {
      cursor: pointer;
  }  

  form {
      margin-top: 10px;
      margin-bottom: 40px;
      width: 340px;
      text-align: center;


      h1 {
        margin-bottom: 24px;
      }

      input {
        margin-top: 5px;
        width: 100%;
        border: 2px solid #acacac;
        font-size: 18px;
        padding: 16px;
        border-radius: 10px;
        color: #FFF;
        font-weight: bold;
        background: #acacac;

        ${(props) => props.isFocused && css`
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        `};

        &::placeholder {
          color: #eee;
        }
      }

      button {
        margin-top: 15px;
        height: 56px;
        width: 100%;
        border: 0;
        background: #7159c1;
        font-size: 18px;
        letter-spacing: 2px;
        border-radius: 10px;
        color: #FFF;
        font-weight: bold;
        transition: backgroud-color 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          animation: ${rotate} 1.5s linear infinite;
        }

        &:hover{
          background: ${shade(0.2, '#7159c1')}
        }
      }
  }
`;

export const ButtonRegister = styled.button`
  margin-bottom: 20px;
  padding: 10px;
  border: 0;
  border-radius: 10px;
  font-weight: bold;

  &:hover{
    background: #7159c1;
    color: #fff;
  }
`;

export const Action = styled.div`
  display: flex;
  place-items: center;
  padding: 5px;
  cursor: pointer;

  svg {
    margin-right: 5px;
  }

  span {
    font-weight: bold;
  }

  &:hover {
    color: #7159c1;
  }
`;

export const Backgroud = styled.div`
  flex: 1;
  background: url(${login}) no-repeat center;
  background-size: cover;
`;