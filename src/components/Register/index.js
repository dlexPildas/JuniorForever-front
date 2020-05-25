import React, {useState} from 'react';
import * as Yup from 'yup';
import {AiOutlineRollback} from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import Axios from 'axios';

import Api from '../../services/api';
import Logo from '../../assets/logo.png';

import { Container, Box, Action } from './styles';

function Register({throwToastNotification, goToLogin}) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const createNewUser = async e => {
        e.preventDefault();

        try {
          if (!(await validationFieldToNewUser({username, email, password, confirmPassword}))) return;

          if (!(await checkExistUserGitHub())) return;

          if (password !== confirmPassword) return toast.error('Senhas são diferentes');

          await Api.post('users', {
            username, email, password
          });

          throwToastNotification(1, 'Usuário cadastrado com sucesso!');

          goToLogin();
            
        } catch (error) {
          throwToastNotification(2,'Erro ao criar o usuário!');
        }
    }

    const checkExistUserGitHub = async () => {
      try {
        await Axios.get(`https://api.github.com/users/${username}`);

        return true;
      } catch (error) {
        throwToastNotification(2, 'Usuário não encontrado no github');
        return false;
      }
    }

    const validationFieldToNewUser = async user => {
      try {
        await Yup.object().shape({
          confirmPassword: Yup.string().required('confirmação de senha é obrigatório'),
          password: Yup.string().required('senha é obrigatório'),
          email: Yup.string().email().required(),          
          username: Yup.string().required('username é obrigatório')
      }).validate(user)

      return true;
      } catch (error) {
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
            <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}/>
          </Box>
          <Box>
            <label>Email</label>
            <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
          </Box>
          <Box>
            <label>Senha</label>
            <input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} />
          </Box>
          <Box>
            <label>Confirmar senha</label>
            <input type="password" placeholder="confimar senha" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          </Box>
          <Action>            
            <div onClick={goToLogin}>
              <AiOutlineRollback />
              <span>voltar</span>
            </div>

            <button type="submit" onClick={createNewUser}>Enviar</button>
          </Action>          
        </form>
        <ToastContainer />
      </Container>
    );
}

export default Register;