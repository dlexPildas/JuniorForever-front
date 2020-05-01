import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import {FaSpinner} from 'react-icons/fa'

import Menu from '../../components/Menu';
import Footer from '../../components/Footer'
import Api from '../../services/api'

import { Container, Author, Info } from './styles';
import {ActionLoad} from '../../components/Loading/styles'

export default class Post extends Component {

  state = {
    post: '',
    loading: false,
    name: '', 
    bio: '',
    avatar_url: ''
  }

  async componentDidMount(){
    this.setState({
      loading: true
    })
  
    await this.getPost();
    await this.getUser();

  }

  async getUser(){
    const response = await Api.get('/users/dlexpildas');
    
    const {name, bio, avatar_url} = response.data

    this.setState({name, bio, avatar_url, loading: false});
  }

  async getPost(){
    const response = await Api.get(`http://localhost:60691/posts/${this.props.match.params.id}`);

    this.setState({
     post: response.data.content,
    })
  }

  render() {
    const {post, loading, name, bio, avatar_url} = this.state;

    return (
      <>
        <Menu />
        <Container>
          {loading ? (
            <ActionLoad>
              <FaSpinner size={100} color='#7159c1' />
            </ActionLoad>          
          ) : (
              <>
                {ReactHtmlParser(post)}
                <Author>
                  <img src={avatar_url} alt={name}></img>
                  <Info>
                    <span>{name}</span>
                    <p>{bio}</p>
                  </Info>
                </Author>
              </>
            )            
          }
        </Container>
        {!loading && (
          <Footer />
        )}
      </>
    )
  }
}
