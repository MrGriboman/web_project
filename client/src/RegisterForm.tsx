import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import './index.css';
import {useNavigate} from 'react-router-dom';


const RegisterForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate('/');
  }

    return (
      <div className="login-form-container">
        <form className="login-form" autoComplete='off' noValidate onSubmit={handleSubmit}>
          <TextField            
            variant='filled'
            size='small'
            required
            label='Логин'            
            sx={{ m:2 }}
          >
          </TextField>          
          <TextField
            variant='filled'
            size='small'
            required
            type='password'
            label='Пароль'            
            sx={{ m:2 }}
          >
          </TextField>
          <TextField
            variant='filled'
            size='small'
            required
            type='password'
            label='Повторите пароль'            
            sx={{ m:2 }}
          >
          </TextField>
          <br></br>
          <div className='submit-btn-container'>
            <Button type='submit' variant='contained' color='primary' fullWidth>Зарегистрироваться</Button>
          </div>          
        </form>
      </div>
    );
}
 
export default RegisterForm;