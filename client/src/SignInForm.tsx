import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const SignInForm = () => {
    const [haveAcc, setHaveAcc] = useState(false);

    const toggleLogged = () => {
        setHaveAcc(!haveAcc);
    }
    
    return (
        <div className='sign-form-container' style={{minWidth: "100%", minHeight: "100%"}}>
            <button style={{margin: 16}} onClick={toggleLogged}>{haveAcc ? 'Пользователь зарегистрирован' : 'Пользователь не зарегистрирован'}</button>
            {haveAcc ? <LoginForm /> : <RegisterForm />}
        </div>
    );
}
 
export default SignInForm;