import React, {Component} from 'react';

import Menu from '../../components/Menu';
import PodCastCard from '../../components/PodcastCard';
import Footer from '../../components/Footer';

import { Container } from './styles';

export default class PodCast extends Component {
  
  render(){
    return (
      <>
        <Menu />
          <Container>
            <PodCastCard />
            <PodCastCard />            
          </Container>
        <Footer />
      </>
    );
  }
}
