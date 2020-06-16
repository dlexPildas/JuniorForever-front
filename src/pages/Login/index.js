import React, { Component } from 'react';
import {AiOutlineRollback} from 'react-icons/ai';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import {FaSpinner} from 'react-icons/fa';

import Register from '../../components/Register';
import api from '../../services/api';
import {login, isAuthenticated} from '../../services/auth';
import Logo from '../../assets/logo.png';

import { Container, Content, ButtonRegister, Action, Backgroud} from './styles';


export default class Login extends Component {
    
    state = {
        username: '',
        password: '',
        isFocus: false,
        isLogin: true,
        isLoading: false
    }

    componentDidMount(){       
        isAuthenticated() && this.navigateToHome();
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

            this.setState({isLoading: true});
            
            if ( !(await this.validationUsernameAndPassword({username, password}))) return;

            const {data} = await api.post(`users/login`, {username, password});

            login(data.token, data.user.userName, data.authorId);

            this.throwToastNotification(1, `Bem vindo, ${data.user.userName}`);

            this.setState({isLoading: false});

            this.props.history.push(`/`);            

        } catch (error) {
            this.throwToastNotification(2, error.message);
            this.setState({isLoading: false});
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
            this.setState({isLoading: false});
            return false;
        }
    }

    render() {
        const {isFocus, username, password, isLogin, isLoading} = this.state;
        
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
                                    disabled={isLoading}
                                />
                                <input 
                                    name='password'
                                    type='password' 
                                    value={password}
                                    onChange={this.handleChange}
                                    placeholder='senha'
                                    disabled={isLoading}
                                />
                                <button type='submit' onClick={this.login} disabled={isLoading}>
                                    {!isLoading ? 
                                        'Login':
                                        (
                                            <FaSpinner />
                                        )}
                                </button>
                            </form>
                            
                            {!isLoading && (
                                <>
                                    <ButtonRegister onClick={this.registerUser}>Criar nova conta</ButtonRegister>

                                    <Action onClick={this.navigateToHome}>
                                        <AiOutlineRollback />
                                        <span>Home</span>
                                    </Action>
                                </>
                            )}
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
