import React, { Component } from 'react';

import Editor from '../../components/Editor';
import Api from '../../services/api';
import { Container, Title } from './styles';

export default class Create extends Component {
    
    createNewPost = async post => {   
        await Api.post('http://localhost:60691/posts', 
            {
                Title: 'Tipos de navegação no React Native',
                Content: post,
                Date: '2020-04-20',
                Theme: 'React Native',
                AuthorId: 3,
            }
        );
    }

    render() {
    return (
        <Container>
            
            <Editor createNewPost={this.createNewPost}/>
            <Title>
                Opa, então quer dizer vai ter conteúdo novo?
            </Title>

        </Container>
    );
  }
}
