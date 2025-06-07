import React, { useEffect, useState } from "react";
import axios from "axios";
import ChatWindow from "../components/ChatWindow";

const Chat = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedChatUser, setSelectedChatUser] = useState(null);
  const currentUsername = localStorage.getItem("username");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/all", {
          params: { currentUsername },
        });
        setUsers(res.data);
      } catch (err) {
        alert("Failed to fetch users");
      }
    };

    fetchUsers();
  }, [currentUsername]);

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = "/";
  };

  const handleChatClick = (username) => {
    setSelectedChatUser(username);
  };

  return (
    <div className="h-screen bg-gray-900 text-white p-4 relative">
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 bg-red-600 px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>

      {!selectedChatUser ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Search users to chat</h1>

          <input
            type="text"
            placeholder="Search by username"
            className="mb-4 p-2 rounded text-white w-full bg-gray-800"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />


          <ul>
            {filteredUsers.length === 0 && <li>No users found</li>}
            {filteredUsers.map((user) => (
              <li
                key={user.username}
                className="p-2 mb-2 bg-gray-800 rounded flex justify-between items-center"
              >
                <span>
                  {user.username} ({user.email})
                </span>
                <button
                  className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
                  onClick={() => handleChatClick(user.username)}
                >
                  Chat
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <button
            onClick={() => setSelectedChatUser(null)}
            className="mb-4 bg-gray-700 px-3 py-1 rounded hover:bg-gray-600"
          >
            ← Back to Users
          </button>
          <ChatWindow currentUser={currentUsername} chatUser={selectedChatUser} />
        </>
      )}
    </div>
  );
};

export default Chat;
