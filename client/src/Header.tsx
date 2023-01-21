import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useContext } from 'react';
import { AuthContext } from "./contexts/AuthContext";
import { start } from "repl";
import { Link } from "react-router-dom";
import AuthInfo from "./objects/AuthInfo";
import RoleType from "./enums/RoleType";

const Header = () => {	
	const {logout, isAuthenticated, role} = useContext(AuthContext);
	let loginBtn, questionnaireBtn;		
	if (isAuthenticated) {
		loginBtn = <button className="logoutBtn" onClick={logout}>Выйти</button>
		questionnaireBtn = <Link className="login-link" to="questionnaire">Анкета</Link>
	}
	else {
		loginBtn = <Link className="login-link" to="auth/login">Войти</Link>
		questionnaireBtn = null;
	}

    const isAdmin = (role == 1);
    return (
    <div className="header-container" style={{minWidth: "100%", minHeight: "100%"}}>
		<AppBar position="static" sx={{width: 1}}>
			<Toolbar>
			
			<Typography variant="h6"
				component="div">
				{isAdmin ? 'Админ' : 'Пользователь'}
			</Typography>
			<div className="questionnaireBtnContainer">
				{questionnaireBtn}
			</div>
			<div className="loginBtnContainer"> 
				{loginBtn}	
			</div>				
			</Toolbar>
			
		</AppBar>				
    </div>
	
);
}

export default Header;
