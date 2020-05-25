import React, { Component } from 'react';
import {AiOutlineRollback} from 'react-icons/ai';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';

import Register from '../../components/Register';
import api from '../../services/api';
import {saveToken} from '../../services/auth';
import Logo from '../../assets/logo.png';

import { Container, Content, ButtonRegister, Action, Backgroud} from './styles';


export default class Login extends Component {
    
    state = {
        username: '',
        password: '',
        isFocus: false,
        isLogin: true
    }
    
    navigateToHome = () => {
        this.props.history.push(`/`);
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    registerUser = () => this.setState({isLogin: false});

    goToLogin = () => this.setState({isLogin: true});

    login = async e => {
        e.preventDefault();       
        
        try {
            const {username, password} = this.state;
            
            if ( !(await this.validationUsernameAndPassword({username, password}))) return;

            const {data} = await api.post(`users/login`, {username, password});

            saveToken(data.token);

            this.props.history.push(`/`);

        } catch (error) {
            this.throwToastNotification(2, error.message);
        }
    }

    throwToastNotification = (type, message) => {
        switch (type) {
            case 1:
                toast.success(message);
                break;
            case 2: 
                toast.error(message);
                break;
            default:
                break;
        }
    } 

    validationUsernameAndPassword = async user => {
        try {
            await Yup.object().shape({
                password: Yup.string().required('Senha é obrigatória'),
                username: Yup.string().required('Username é obrigatório')
            }).validate(user);

            return true;
        } catch (error) {
            this.throwToastNotification(2, error.errors[0]);
            return false;
        }
    }

    render() {
        const {isFocus, username, password, isLogin} = this.state;
        
        return (
            <>
                <Container>
                    {isLogin ? (
                        <Content isFocus={isFocus}>                        
                            <img src={Logo} alt='JuniorForever' onClick={this.navigateToHome}/>

                            <form>
                                <h1>Faça seu login</h1>
                                <input 
                                    name='username'
                                    type='text' 
                                    value={username}
                                    onChange={this.handleChange}
                                    placeholder='username'
                                />
                                <input 
                                    name='password'
                                    type='password' 
                                    value={password}
                                    onChange={this.handleChange}
                                    placeholder='senha'
                                />
                                <button type='submit' onClick={this.login}>Login</button>
                            </form>
                            
                            <ButtonRegister onClick={this.registerUser}>Criar nova conta</ButtonRegister>

                            <Action onClick={this.navigateToHome}>
                                <AiOutlineRollback />
                                <span>Home</span>
                            </Action>
                            <ToastContainer />
                        </Content>              
                    ) : (
                        <Register throwToastNotification={this.throwToastNotification} goToLogin={this.goToLogin}/>
                    )}                          
                    <Backgroud />
                </Container>
            </>
        );
    }
}
