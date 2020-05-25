import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Link} from 'react-router-dom';

import { isAuthenticated, logout } from '../../services/auth';

import logo from '../../assets/logo.png';

import { Container, Item } from './styles';

export default function Menu() {

  const handleLogout = () => {
    logout();
  };

  return (
    <Container >
        <img src={logo} alt='JuniorForver'/>        
        <ul>
          <Item selected={false}>
            <Link to={`/`}>HOME</Link>
          </Item>
          <Item selected={false}>
            <Link to={`/podcasts`}>PODCASTS</Link>
          </Item>
          <Item selected={false}>
            <Link to={`/courses`}>CURSOS</Link>
          </Item>
          {
            isAuthenticated() ? (
              <Item selected={false} onClick={handleLogout}>
                <Link to={`/login`}>SAIR</Link>
              </Item>             
            ) : (
              <Item selected={false}>
                <Link to={`/login`}>ENTRAR</Link>
              </Item>
            )
          }
          
        </ul>
        <FaBars size={40}/>
    </Container>
  )
}
