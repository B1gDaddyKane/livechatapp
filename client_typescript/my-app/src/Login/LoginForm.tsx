import {useState} from 'react';

interface LoginProps {
    sendLogin: (Name: string, Password: string) => void;
}

export const LoginForm = (props: LoginProps) => {
    const [Name, setName] = useState('');
    const [Password, setPassword] = useState('');
    
    const onSubmit = (e: any) => {
        e.preventDefault();

        const isUserNameProvided = Name && Name !== '';
        const isPassProvided = Password && Password !== '';

        if(isUserNameProvided && isPassProvided){
            props.sendLogin(Name, Password);
        }else {
            alert('Insert an username and a password you goof');
        }
    }

    const onUserNameChange = (e: {target: {value: string}}) => {
        setName(e.target.value);
    }

    const onPassChange = (e:  {target: {value: string}}) => {
        setPassword(e.target.value);
    }

    return(
        <form onSubmit={onSubmit}>
            <label htmlFor="user">Username:</label>
            <input 
            type="text" 
            id="userName" 
            name="userName"
            value={Name}
            onChange={onUserNameChange}
             />
            <br />
            <label htmlFor="pass">Password:</label>
            <input 
            type="text" 
            id="pass" 
            name="pass"
            value={Password}
            onChange={onPassChange} />
            <button>Login</button>
        </form>
    )
}