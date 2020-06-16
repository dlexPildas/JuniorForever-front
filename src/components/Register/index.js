import React, {useState} from 'react';
import * as Yup from 'yup';
import {AiOutlineRollback} from 'react-icons/ai';
import {FaSpinner, FaCheckCircle} from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import Axios from 'axios';

import Api from '../../services/api';
import Logo from '../../assets/logo.png';

import { Container, Box, Input, ButtonCheckExistUserGithub, Action } from './styles';
import { set } from 'date-fns';

function Register({throwToastNotification, goToLogin}) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [existUserGitHub, setExistUserGitHub] = useState(false);
    
    const createNewUser = async e => {
        e.preventDefault();

        try {
          setLoading(true);

          if (!(await validationFieldToNewUser({username, email, password, confirmPassword}))) return;

          const userDto = {username, email, password};
          const authorDto = {avatarUrl, name, bio};
          const userAuthorDto = {userDto, authorDto};

          await Api.post('users', userAuthorDto);

          throwToastNotification(1, 'Usuário cadastrado com sucesso!');

          goToLogin();
            
        } catch (error) {
          throwToastNotification(2,'Erro ao criar o usuário!');
          setLoading(false);
          setExistUserGitHub(true);
        }
    }

    const checkExistUserGitHub = async () => {
      try {
        const {data} =  await Axios.get(`https://api.github.com/users/${username}`);

        console.log(data);

        setAvatarUrl(data.avatar_url);
        setBio(data.bio ?? 'Bio desconhecida');
        setName(data.name ?? 'Desconhecido');
        setEmail(data.email ?? '');

        setExistUserGitHub(true);

        throwToastNotification(1, 'Usuário encontrado com sucesso!');
      } 
      catch (error) {
        throwToastNotification(2, 'Usuário não encontrado no github');
      }
    }

    const validationFieldToNewUser = async user => {
      try {
        await Yup.object().shape({
          confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Senhas são diferentes'),
          password: Yup.string().required('senha é obrigatório'),
          email: Yup.string().email().required('email é obrigatório'),          
          username: Yup.string().required('username é obrigatório')
      }).validate(user)

      return true;
      } catch (error) {
        setLoading(false);
        throwToastNotification(2, error.errors[0]);
        return false;
      }
    }
    
    return (
      <Container>
        <img src={Logo} alt='JuniorForever' />

        <form>
          <Box>
            <label>User do github</label>
            <div>
              <Input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}/>
              {existUserGitHub && (
                <FaCheckCircle size={50} color="#59b359"/>
              )}
            </div>            
          </Box>
          
          {!existUserGitHub ? (
            <Box>
              <ButtonCheckExistUserGithub type="button" onClick={() => checkExistUserGitHub()}>Verificar</ButtonCheckExistUserGithub>
            </Box>
          ) : (
            <>
              <Box>
                <label>Email</label>
                <Input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
              </Box>
              <Box>
                <label>Senha</label>
                <Input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} />
              </Box>
              <Box>
                <label>Confirmar senha</label>
                <Input type="password" placeholder="confimar senha" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
              </Box>
              <Action>            
                <div onClick={goToLogin}>
                  <AiOutlineRollback />
                  <span>voltar</span>
                </div>

                <button type="submit" onClick={createNewUser}>
                  {!loading ? 
                    'Enviar':
                  (
                    <FaSpinner />
                  )}
                </button>
              </Action>
            </>          
          )}
          
        </form>
        <ToastContainer />
      </Container>
    );
}

export default Register;