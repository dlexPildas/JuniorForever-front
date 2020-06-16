import React, { Component } from 'react';
import * as Yup from 'yup'; 
import { ToastContainer, toast } from 'react-toastify';

import Editor from '../../components/Editor';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Api from '../../services/api';
import {getAuthorId} from '../../services/auth';


import { HeaderPost, Container, Title } from './styles';

export default class Create extends Component {
    
    state = {
        title: "",
        content: "",
        theme: ""
    }

    handleChange = e => this.setState({[e.target.name]: e.target.value});

    createNewPost = async content => { 
        var post = {
            Title: this.state.title,
            Content: content,
            Date: new Date(),
            Theme: this.state.theme,
            AuthorId: parseInt(getAuthorId()),
        };

        if (!(await this.dataValidation(this.state.title, this.state.theme))) return;

        console.log(post);

        try {
            await Api.post('posts', post);

            toast.success("Post criado com sucesso!");

            this.props.history.push(`/`);
        } catch (error) {
            toast.error(error);
        }
    }

    dataValidation = async (title, theme) => {
        try {
            await Yup.object().shape({
                title: Yup.string().required('título é obrigatório'),
                theme: Yup.string().required('Tema é obrigatório'),
            }).validate({title, theme});

            return true;
        } catch (error) {
            toast.error(error.errors[0]);
            return false;
        }        
    }

    render() {
        const {title, theme} = this.state;

        return (
            <>
                <Menu />
                <Container>
                    <HeaderPost>
                        <label>
                            Título:
                            <input type="text" name="title" value={title} onChange={this.handleChange} />
                        </label>
                        <label>
                            Tema:
                            <input type="text" name="theme" value={theme} onChange={this.handleChange} />
                        </label>
                    </HeaderPost>

                    <Editor createNewPost={this.createNewPost} />
                    <Title>
                        Opa, então quer dizer vai ter conteúdo novo?
                    </Title>
                </Container>
                <Footer />
            </>
        );
    }
}
