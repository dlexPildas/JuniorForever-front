import React from 'react';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Wait from '../../assets/wait.png';

import { Container } from './styles';

export default class Courses extends React.Component {
  
  render(){
    return (
      <>
        <Menu />
          <Container>
            <img src={Wait} alt="wait"/>
          </Container>
        <Footer />
      </>
    );
  }
}
