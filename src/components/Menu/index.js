import React, {useState} from 'react';
import {FaBars} from 'react-icons/fa';
import { AiFillCloseCircle } from "react-icons/ai";
import {Link} from 'react-router-dom';

import { isAuthenticated, logout } from '../../services/auth';

import logo from '../../assets/logo.png';

import { Container, Item } from './styles';

export default function Menu() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);


  const handleLogout = () => {
    logout();
  };

  
  const addOrRemoveClassOpenToMenu = () => {
    const menu = document.querySelector('.menu')
    menu.classList.toggle('open');
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <Container >
        <img src={logo} alt='JuniorForver'/>        
        <ul className="menu">
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
        {isOpenMenu ? (
          <AiFillCloseCircle size={40} onClick={addOrRemoveClassOpenToMenu} />
        ): (
          <FaBars size={40} onClick={addOrRemoveClassOpenToMenu} />
        )}
        
    </Container>
  )
}
