import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
//import './index.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { useState } from 'react';
import SignInForm from './SignInForm';
import Header from './Header';
import authRepository from './repositories/AuthRepository';
import RoleType from './enums/RoleType';
import { Sign } from 'crypto';
import AuthInfo from './objects/AuthInfo';
import { AuthContextProvider } from './contexts/AuthContext';
import Questionnaire from './questionnaire';

function App() {
  return (    
    <AuthContextProvider>
      <div className='app'>      
        <Router>
          <Routes>
            <Route path='/' element={<Header/>} />
            <Route path='/auth/login/' element={true
              ? <SignInForm />
              : <Navigate replace to={"/"} />} />
            <Route path='/questionnaire' element={<Questionnaire/>} />
          </Routes>
        </Router>
      </div>    
    </AuthContextProvider>  
  );
}

export default App;
