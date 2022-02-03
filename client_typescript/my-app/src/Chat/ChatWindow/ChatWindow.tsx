import * as React from 'react';
import {Message, MessageProps} from './Message/Message';

export interface ChatProps {
    chat: MessageProps[]
}

export const ChatWindow = (props: ChatProps) => {
    const chat = props.chat
        .map((m: MessageProps) => <Message
            key={Date.now() * Math.random()}
            user={m.user}
            message={m.message}/>);

    return(
        <div>
            {chat}
        </div>
    );
};