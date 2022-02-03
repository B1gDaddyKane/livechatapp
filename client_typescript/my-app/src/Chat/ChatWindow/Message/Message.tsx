import * as React from 'react';

export interface MessageProps {
    user: string,
    message: string
}

export const Message = (props: MessageProps) => (
    <div style={{background: "#eee", borderRadius: "5px", padding: "0 10px" }}>
        <p><strong>{props.user}</strong> says:</p>
        <p>{props.message}</p>
    </div>
);