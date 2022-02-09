import Chat from './Chat/Chat';
import Login from './Login/Login';
import React, {useState, useMemo} from 'react';
import LoginContext from './Context/LoginContext';

export const LandingPage = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const value = useMemo(
        () => ({loggedIn, setLoggedIn}),
        [loggedIn]
    );
        if(loggedIn) {
            return (
                <LoginContext.Provider value={value}>
                    <div style={{ margin: '0 30%' }}>
                        <Chat />
                    </div>
                </LoginContext.Provider>
            );
        } else {
            return (
                <LoginContext.Provider value={value}>
                    <div style={{ margin: '0 30%' }}>
                        <Login />
                    </div>
                </LoginContext.Provider>
              );
            }
}
