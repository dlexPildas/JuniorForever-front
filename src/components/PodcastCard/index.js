import React from 'react';
import Audio from '../../util/teste.mp3'
import { Container, BoxTop, BoxBottom } from './styles';

function PodcastCard() {
  return (
      <Container>
            <BoxTop>
                <h3>A história de um arquiteto</h3>
                <span>progress</span>
                <span>May 4, 2020</span>
                <span>29:30</span>
            </BoxTop>
            <BoxBottom>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard...
                </p>
                <div>
                    <audio controls src={Audio}></audio>
                </div>                
            </BoxBottom>
      </Container>
  );
}

export default PodcastCard;