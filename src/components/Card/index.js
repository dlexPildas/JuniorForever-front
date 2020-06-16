import React from 'react';
import PropTypes from 'prop-types';

import { Container, AuthorDate } from './styles';

export default function Card({theme, title, nameAuthor, date, navigateToPost}) {

  return (
    <Container onClick={navigateToPost}>
      <h1>
        {theme}
      </h1>
      <p>{title}</p>
      
      <AuthorDate>
        <span>{nameAuthor}</span>
        <h4>{date}</h4>
      </AuthorDate> 
    </Container>
  );
}

Card.propTypes = {
  theme: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  nameAuthor: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  navigateToPost: PropTypes.func.isRequired
}
