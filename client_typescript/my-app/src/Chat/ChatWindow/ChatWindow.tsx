import * as React from 'react';
import {Message, MessageProps} from './Message/Message';

type Props = {
    chat: Array<MessageProps>
}

const ChatWindow: React.FC<Props> = props => {
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

export default ChatWindow;