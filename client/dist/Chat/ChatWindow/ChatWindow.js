import * as React from 'react';
import Message from './Message/Message';
var ChatWindow = function (props) {
    var chat = props.chat
        .map(function (m) { return React.createElement(Message, { key: Date.now() * Math.random(), user: m.user, message: m.message }); });
    return (React.createElement("div", null, chat));
};
export default ChatWindow;
//# sourceMappingURL=ChatWindow.js.map