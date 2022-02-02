import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import * as signalR from '@microsoft/signalr';
import ChatWindow from './ChatWindow/ChatWindow';
import ChatInput from './ChatInput/ChatInput';

const Chat = () => {
    const [connection, setConnection] = useState(null);
    const [chat, setChat] = useState([]);
    const latestChat = useRef(null);

    latestChat.current = chat;

    useEffect(() => {
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl('http://localhost:5001/hubs/chat')
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(() => {
                    console.log('Connected');

                    connection.on('ReceiveMessage', message => {
                        const updatedChat = [...latestChat.current];
                        updatedChat.push(message);

                        setChat(updatedChat);
                    });
                }).catch(e => console.log('Connection failed: ',e));
        }
    }, [connection]);

    const sendMessage = async (user, message) => {
        const chatMessage = {
            user: user,
            message: message
        };
        console.log(connection._connectionStarted);
        if (connection._connectionStarted) {
            try {
                await connection.send('SendMessage', chatMessage);
            } catch(e) {
                console.log(e);
            }
        } else {
            alert('No connection to server');
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