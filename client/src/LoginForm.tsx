import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import AuthInput from './objects/AuthInput';
import { AuthContext } from './contexts/AuthContext';
import authRepository from './repositories/AuthRepository';


const LoginForm = () => {
    const navigate = useNavigate();
    const {login, isAuthenticated, role} = useContext(AuthContext);    
    const loginRef: React.RefObject<HTMLInputElement> = React.createRef();
    const passwordRef: React.RefObject<HTMLInputElement> = React.createRef();

    const handleLogin = () => {
      const authInput: AuthInput = {
        login: loginRef.current?.value ?? "",
        password: passwordRef.current?.value ?? ""
      }      
      login(authInput)
        .then((res) => {
          console.log(res);
          if (res)
            navigate('/');
        })
    }

    return (
      <div className="login-form-container">
        <form className="login-form" autoComplete='off' noValidate>
          <TextField      
            inputRef={loginRef}           
            variant='filled'
            size='small'
            required
            label='Логин'            
            sx={{ m:2 }}
          >
          </TextField>          
          <TextField
            inputRef={passwordRef}
            variant='filled'
            size='small'
            required
            type='password'
            label='Пароль'            
            sx={{ m:2 }}
          >
          </TextField>          
          <br></br>
          <div className='submit-btn-container'>
            <Button onClick={handleLogin} variant='contained' color='primary' fullWidth>Войти</Button>
          </div>          
        </form>
      </div>
    );
}
 
export default LoginForm;