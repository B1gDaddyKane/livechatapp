import * as React from 'react';
var Message = function (props) { return (React.createElement("div", { style: { background: "#eee", borderRadius: "5px", padding: "0 10px" } },
    React.createElement("p", null,
        React.createElement("strong", null, props.user),
        " says:"),
    React.createElement("p", null, props.message))); };
export default Message;
//# sourceMappingURL=Message.js.map