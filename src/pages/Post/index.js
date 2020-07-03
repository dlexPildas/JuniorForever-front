import React, { Component } from 'react';
import Axios from 'axios';
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
    avatar_url: '',
    title: ''
  }

  async componentDidMount(){
    this.setState({
      loading: true
    })
  
    await this.getPost();
  }

  async getPost(){
    console.log(`/posts/${this.props.match.params.id}`);
    const {data} = await Api.get(`/posts/${this.props.match.params.id}`);

    this.setState({
      title: data.title,
      post: data.content,
      name: data.author.name,
      bio: data.author.bio,
      avatar_url: data.author.avatarUrl,
      loading: false
    });

  }

  render() {
    const {title, post, loading, name, bio, avatar_url} = this.state;

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
                <h2>&lt; {title} &#47;&gt;</h2>
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
