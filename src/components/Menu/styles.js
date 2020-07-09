import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 150px;
  padding: 0 150px;
  display: flex;
  justify-content: space-around;
  align-content: center;
  background: #eee;

  @media (max-width: 1128px) {
    justify-content: flex-end;
    height: 60px;
    padding: 10px;
  }

  img {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 42px;

    @media (max-width: 1128px) {
      display: none;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;  

    li {
      margin: 10px;
    }

    @media (max-width: 1128px) {
      display: none;
      z-index: 2;
    }
  }

  .open {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    list-style: none;
    background: rgba(250, 250, 250, .9);
  }

  svg {
    position: fixed;
    z-index: 2;
    color: rgba(0, 0, 0, 0.2);
    @media (min-width: 1128px) {
      display: none;
    }
  }
`;

export const Item = styled.li`
  margin: 0 10px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;

  a {
    border-radius: 10px;
    color: #000;
    text-decoration: none;
    padding: 5px;
    border-bottom: ${props => props.selected && '5px solid #7159c1'};
    
    &:hover{
      background: #7159c1;
      color: #fff;
    }
  } 
`;
