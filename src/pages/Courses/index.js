import React from 'react';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

import { Container } from './styles';

export default class Courses extends React.Component {
  
  render(){
    return (
      <>
        <Menu />
          <Container>
            <h1>Courses</h1>            
          </Container>
        <Footer />
      </>
    );
  }
}
