var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import * as signalR from '@microsoft/signalr';
import ChatWindow from './ChatWindow/ChatWindow';
import ChatInput from './ChatInput/ChatInput';
var Chat = function () {
    var _a = useState(null), connection = _a[0], setConnection = _a[1];
    var _b = useState([]), chat = _b[0], setChat = _b[1];
    var latestChat = useRef(null);
    latestChat.current = chat;
    useEffect(function () {
        var newConnection = new signalR.HubConnectionBuilder()
            .withUrl('http://localhost:5001/hubs/chat')
            .withAutomaticReconnect()
            .build();
        setConnection(newConnection);
    }, []);
    useEffect(function () {
        if (connection) {
            connection.start()
                .then(function () {
                console.log('Connected');
                connection.on('ReceiveMessage', function (message) {
                    var updatedChat = __spreadArray([], latestChat.current, true);
                    updatedChat.push(message);
                    setChat(updatedChat);
                });
            }).catch(function (e) { return console.log('Connection failed: ', e); });
        }
    }, [connection]);
    var sendMessage = function (user, message) { return __awaiter(void 0, void 0, void 0, function () {
        var chatMessage, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    chatMessage = {
                        user: user,
                        message: message
                    };
                    console.log(connection._connectionStarted);
                    if (!connection._connectionStarted) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, connection.send('SendMessage', chatMessage)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 6];
                case 5:
                    alert('No connection to server');
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", null,
        React.createElement(ChatInput, { sendMessage: sendMessage }),
        React.createElement("hr", null),
        React.createElement(ChatWindow, { chat: chat })));
};
export default Chat;
//# sourceMappingURL=Chat.js.map