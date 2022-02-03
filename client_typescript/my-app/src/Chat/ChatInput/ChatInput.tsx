import * as React from 'react';
import {useState} from 'react';

interface ChatInputProps {
    sendMessage: (user: string, message: string) => void
}

const ChatInput = (props: ChatInputProps) => {
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = (e: any) => {
        e.preventDefault();
        
        const isUserProvided = user && user !== '';
        const isMessageProvided = message && message !== '';

        if (isUserProvided && isMessageProvided) {
            props.sendMessage(user, message);
        }
        else {
            alert('Insert an user and a message you goof');
        }
    }

    const onUserUpdate = (e: {target: {value: string}}) => {
        setUser(e.target.value);
    }

    const onMessageUpdate = (e: {target: {value: string}}) => {
        setMessage(e.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="user">User:</label>
            <br />
            <input
                id='user' 
                name='user'
                value={user}
                onChange={onUserUpdate}/>
            <br/>
            <label htmlFor="message">Message:</label>
            <br />
            <input 
                type="text"
                id="message"
                name="message" 
                value={message}
                onChange={onMessageUpdate} />
            <br /><br />
            <button>Submit</button>
        </form>
    )
};

export default ChatInput;