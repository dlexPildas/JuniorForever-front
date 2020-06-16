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
    margin-top: 30px;
    justify-content: flex-end;
    height: 50px;
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
  
    @media (max-width: 1128px) {
      display: none;
    }
  }

  svg {
    display: none;
    height: 100%;
    cursor: pointer;
    &:hover {
      color: #7159c1;
    }
    
    @media (max-width: 1128px) {
      display: block;
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
