import React, {Component} from 'react';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

import { Container } from './styles';

export default class PodCast extends Component {
  
  render(){
    return (
      <>
        <Menu />
          <Container>
            <h1>PodCast</h1>            
          </Container>
        <Footer />
      </>
    );
  }
}
