import React, {useEffect, useState} from "react";
import io from "socket.io-client";
import "./App.css";

const ChatApp = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    const newSocket = io("http://195.82.29.237:3000");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("message", (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      socket.emit("getMessageHistory");
      socket.on("messageHistory", (history) => {
        setMessages(history);
      });
    }
  }, [socket]);

  const handleSendMessage = () => {
    if (messageInput.trim() !== "") {
      socket.emit("message", messageInput);
      setMessageInput("");
    }
  };

  return (
    <div>
      <h1>Chat App</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.sender}: </strong>
            <span>{message.content}</span>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp;
