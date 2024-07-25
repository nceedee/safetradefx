import React, { createContext, useEffect, useReducer } from 'react';
import { AuthReducer } from './AuthReducer'; 

// Assuming User is an imported type or class. If you need to define it, you can use a placeholder.
const userString = localStorage.getItem('user');
const initialUser = userString ? JSON.parse(userString) : null;

const INITIAL_STATE = {
    currentUser: initialUser,
    dispatch: () => { },
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.currentUser));
    }, [state.currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
