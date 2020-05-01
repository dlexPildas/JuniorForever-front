import React from 'react';
import {FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa'


import { Container, Info } from './styles';

export default function Footer() {
  return (
    <Container>
        <Info>
            <FaFacebookSquare color='#3b5998' size={40} />
            <FaTwitterSquare  color='#1da1f2' size={40} />
            <span>JuniorForever</span>
        </Info>
    </Container>
  );
}
