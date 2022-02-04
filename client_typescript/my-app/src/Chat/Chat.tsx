import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import * as signalR from '@microsoft/signalr';
import {ChatWindow} from './ChatWindow/ChatWindow';
import ChatInput from './ChatInput/ChatInput';
import { MessageProps } from './ChatWindow/Message/Message';

const Chat = () => {
    const [connection, setConnection] = useState<signalR.HubConnection | null>(null);
    const [chat, setChat] = useState<MessageProps[]>([]);
    const latestChat = useRef<MessageProps[]>([]);
    
    latestChat.current = chat;
    useEffect(() => {
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl('https://localhost:5001/hubs/chat', {accessTokenFactory: () => this.loginToken })
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(() => {
                    console.log('Connected');

                    connection.on('ReceiveMessage', (message: MessageProps) => {
                        const updatedChat = [...latestChat.current];
                        updatedChat.push(message);

                        setChat(updatedChat);
                    });
                }).catch((e: string) => console.log('Connection failed: ', e));
        }
    }, [connection]);

    const sendMessage = async (user: string, message: string) => {
        const chatMessage = {
            user: user,
            message: message
        };
        if (connection != null){
            if (connection.connectionId != null) {
                try {
                    await connection.send('SendMessage', chatMessage);
                } catch(e) {
                    console.log(e);
                }
            } else {
                alert('No connection to server');
            }
        }
        
    }

    return ( 
        <div>
            <ChatInput sendMessage={sendMessage}/>
            <hr />
            <ChatWindow chat={chat}/>
        </div>
    );
};

export default Chat;