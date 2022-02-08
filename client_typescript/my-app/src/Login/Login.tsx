import * as React from 'react';
import {useState, useEffect} from 'react';
import * as signalR from '@microsoft/signalr';
const Login = () => {
    const [connection, setConnection] = useState<signalR.HubConnection | null>(null);
    const [login, setLogin] = useState(null);
    //TODO: Add context
    useEffect(() => {
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl('https://localhost:5001/Chat/Hub')
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);
}