import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Link} from 'react-router-dom';

import { Container, Item } from './styles';

export default function Menu() {

  return (
    <Container >
        <span>JuniorForever</span>
        <ul>
          <Item selected={false}>
            <Link to={`/home`}>HOME</Link>
          </Item>
          <Item selected={false}>
            <Link to={`/home`}>PODCASTS</Link>
          </Item>
          <Item selected={false}>
            <Link to={`/home`}>CURSOS</Link>
          </Item>
          <Item selected={false}>
            <Link to={`/home`}>LOGIN</Link>
          </Item>
        </ul>
        <FaBars size={40}/>
    </Container>
  )
}
