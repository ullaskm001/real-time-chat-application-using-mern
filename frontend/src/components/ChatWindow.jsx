import React, { useState, useEffect } from "react";
import axios from "axios";

const ChatWindow = ({ currentUser, chatUser }) => {
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/messages`, {
          params: { sender: currentUser, receiver: chatUser },
        });
        setMessages(res.data);
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    };

    fetchMessages();
  }, [currentUser, chatUser]);

  const sendMessage = async () => {
    if (newMsg.trim() === "") return;

    try {
      const res = await axios.post("http://localhost:5000/api/messages", {
        sender: currentUser,
        receiver: chatUser,
        content: newMsg,
      });

      setMessages([...messages, res.data]);
      setNewMsg("");
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <h4>Chat with {chatUser}</h4>

      <div style={{ height: "200px", overflowY: "auto", marginBottom: "10px" }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.sender === currentUser ? "right" : "left" }}>
            <strong>{msg.sender}</strong>: {msg.content}
          </div>
        ))}
      </div>

      <input
        type="text"
        value={newMsg}
        onChange={(e) => setNewMsg(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatWindow;
