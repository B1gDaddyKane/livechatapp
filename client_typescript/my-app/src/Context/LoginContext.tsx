import {createContext} from 'react';

const defaultState = {
    loggedIn: false,
    setLoggedIn: (value: any) => {}
};

const LoginContext = createContext(defaultState);

export default LoginContext;