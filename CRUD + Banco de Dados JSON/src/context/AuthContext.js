import React, { createContext, useReducer } from "react";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext(null);

function authReducer(state, action){
    switch(action.type){
        case "signIn":
            return({
                ...state,
                signedIn: true,
                access_token: action.paylod
            })
        case "signOut":
            return({
                ...state,
                signedIn: false,
                access_token: null
            });
        case "error":
            return({
                ...state,
                signedIn: false,
                error: action.paylod
            });
        default:
            return({...state});
    }
}

const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {
        signedIn: false,
        access_token: null,
        error: ''
    });

    const signIn = async({username, password}) => {
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:3000/users', // return token
                data: {
                    grant_type: 'password',
                    username,
                    password
                }
            });
            await AsyncStorage.setItem('access_token', response.data.access_token);
            dispatch({type: 'signIn', paylod: response.data.access_token});
        } catch (err) {
            dispatch({type: 'error', paylod: 'Erro na autenticação do usuário!'});
        } 
    };

    return(
        <AuthContext.Provider 
            value={{
                authState,
                signIn
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }