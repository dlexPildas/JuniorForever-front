import React, { Component } from 'react';
import {FaSpinner} from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { parseISO } from "date-fns";
import { format, zonedTimeToUtc } from "date-fns-tz";

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

    componentDidMount(){
        this.setState({loading: true});

        this.getAllPosts();
    }

    navigateToPost = postId => {
        this.props.history.push(`/post/${postId}`);
    }
    
    getAllPosts = async () => {
        try {
            const response = await Api.get('/posts');

            this.setState({
                posts: response.data,
                loading: false
            });
        } 
        catch (error) {
            toast.error("Erro ao carregar artigos");
            this.setState({loading: false});
        }
    }

    formatarData = data => {
        return format(parseISO(data), "dd/MM/yyyy");
    }

    render(){
        const {posts, loading} = this.state;
        
        return (
            <>
                <Menu />
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
                                        date={this.formatarData(post.date)}
                                        navigateToPost={() => this.navigateToPost(post.id)}
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
