import React from 'react';
import {FaLinkedin, FaTwitterSquare, FaGithub} from 'react-icons/fa'


import { Container, Info } from './styles';

export default function Footer() {
  return (
    <Container>
        <Info>
            <a href="https://www.linkedin.com/in/daniel-oliveira-b72366181/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin color='#0077b5' size={40} />
            </a>
            <a href="https://twitter.com/Daniel_0431" target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare  color='#1da1f2' size={40} />
            </a>
            <a href="https://github.com/dlexPildas" target="_blank" rel="noopener noreferrer">
              <FaGithub color='#000' size={40} />
            </a>
        </Info>
    </Container>
  );
}
