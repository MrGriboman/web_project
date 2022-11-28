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
	//const {isAuthenticated} = useContext(AuthContext);
	const isAuthenticated = false;
	let button;
	if (isAuthenticated)
		button = <Button>Выйти</Button>
	else
		button = <Link className="login-link" to="auth/login">Войти</Link>

    const [isAdmin, setIsAdmin] = useState(false);
    return (
    <div className="header-container" style={{minWidth: "100%", minHeight: "100%"}}>
		<AppBar position="static" sx={{width: 1}}>
			<Toolbar>
			<IconButton
				size="large"
				edge="start"
				color="inherit"
				aria-label="menu"
				sx={{ mr: 2 }}
			>
			<MenuIcon />
			</IconButton>
			<Typography variant="h6"
				component="div">
				{isAdmin ? 'Админ' : 'Пользователь'}
			</Typography>		
			</Toolbar>
			
			{button}
		</AppBar>
		<Button color='secondary' onClick={() => {setIsAdmin(!isAdmin)}} >Change type of user</Button>		
    </div>
	
);
}

export default Header;
