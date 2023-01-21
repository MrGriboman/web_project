import RoleType from "../enums/RoleType";
import React, {useState, useEffect} from 'react';
import authRepository from '../repositories/AuthRepository';
import { setConstantValue } from "typescript";
import AuthInfo from "../objects/AuthInfo";
import AuthInput from "../objects/AuthInput";

interface IAuthContext {
    isAuthenticated: boolean,

    role: RoleType,
    
    login: (authInput: AuthInput) => Promise<boolean>,

    logout: () => void
}

export const AuthContext = React.createContext<IAuthContext> ({
    isAuthenticated: false,
    role: RoleType.Unknown,
    login(authInput: AuthInput) {
        throw("Not implemented")
    },
    logout() {
        throw("Not implemented")
    },
})

export const AuthContextProvider = ({children}: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState(RoleType.Unknown);

    const setState = (authInfo: AuthInfo) => {
        setIsAuthenticated(authInfo.authorized);
        setRole(authInfo.role);
    }

    const login = async (authInput: AuthInput): Promise<boolean> => {
        let result = await authRepository.login(authInput);
        setState(result);
        return result.authorized;
    }

    const logout = async (): Promise<void> => {
        let result = await authRepository.logout();
        setState(result);
    }

    return (
        <AuthContext.Provider value = {{isAuthenticated, role, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}