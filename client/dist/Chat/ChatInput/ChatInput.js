import * as React from 'react';
import { useState } from 'react';
var ChatInput = function (props) {
    var _a = useState(''), user = _a[0], setUser = _a[1];
    var _b = useState(''), message = _b[0], setMessage = _b[1];
    var onSubmit = function (e) {
        e.preventDefault();
        var isUserProvided = user && user !== '';
        var isMessageProvided = message && message !== '';
        if (isUserProvided && isMessageProvided) {
            props.sendMessage(user, message);
        }
        else {
            alert('Insert an user and a message you goof');
        }
    };
    var onUserUpdate = function (e) {
        setUser(e.target.value);
    };
    var onMessageUpdate = function (e) {
        setMessage(e.target.value);
    };
    return (React.createElement("form", { onSubmit: onSubmit },
        React.createElement("label", { htmlFor: "user" }, "User:"),
        React.createElement("br", null),
        React.createElement("input", { id: 'user', name: 'user', value: user, onChange: onUserUpdate }),
        React.createElement("br", null),
        React.createElement("label", { htmlFor: "message" }, "Message:"),
        React.createElement("br", null),
        React.createElement("input", { type: "text", id: "message", name: "message", value: message, onChange: onMessageUpdate }),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("button", null, "Submit")));
};
export default ChatInput;
//# sourceMappingURL=ChatInput.js.map