import React, { Component } from 'react';
import {FaSpinner} from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

import Api from '../../services/api';

import Card from '../../components/Card';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

import {Container, Title} from './styles';
import {ActionLoad} from  '../../components/Loading/styles';

export default class Main extends Component {

    state = {
        posts: [],
        loading: false
    }

    changeToPost = postId => {
        this.props.history.push(`/post/${postId}`);
    }

    async componentDidMount(){
        this.setState({loading: true});
        try {
            const response = await Api.get('/posts');

            this.setState({
                posts: response.data,
                loading: false
            });
        } catch (error) {
            toast.error("Erro ao carregar artigos");
            this.setState({loading: false});
        }
    }
    
    render(){
        const {posts, loading} = this.state;
        
        return (
            <>
                <Menu />
                <ToastContainer />
                <Title>
                    <span>&lt;Welcome... &#47;&gt;</span>
                </Title>
                { loading ? (
                    <ActionLoad>
                        <FaSpinner size={100} color='#7159c1' />
                    </ActionLoad>
                ) : (
                    <>
                        <Container>
                            {
                                posts.map(post => (
                                    <Card
                                        key={post.id} 
                                        theme={post.theme} 
                                        title={post.title} 
                                        nameAuthor={post.author.name} 
                                        date={post.date}
                                        changeToPost={() => this.changeToPost(post.id)}
                                    /> 
                                ))
                            }    
                        </Container>
                        <Footer />
                    </>
                )}
            </>
        );
    }
}
