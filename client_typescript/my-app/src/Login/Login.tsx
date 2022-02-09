import {useContext} from 'react';
import {LoginForm} from './LoginForm';
import axios from 'axios';
import LoginContext from '../Context/LoginContext';
const Login = () => {
    const {loggedIn, setLoggedIn} = useContext(LoginContext);
    const URL = "https://localhost:5001/login";
    const changeHandler = (event: boolean) => setLoggedIn(event);

    const sendLogin = async (Name: string, Password: string) =>{
        const LoginMessage = {
            Name,
            Password
        }
        return axios
            .post(URL,
                LoginMessage
            )
            .then(response => {
                console.log(response.data);
                changeHandler(true);
                
                return response.data;
            });
    }

    return(
            <div>
                <LoginForm sendLogin={sendLogin}/>
            </div>
    );
};

export default Login;