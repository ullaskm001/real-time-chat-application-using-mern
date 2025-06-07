# Real-Time Chat Application

This is a simple full-stack real-time chat application built with React (frontend), Express (backend), and MongoDB. It supports user registration, login, viewing other users, and chatting with them. Messages can be sent by clicking the Send button or pressing Enter.

## Features

- User registration and login with username, email, and password
- View list of registered users (excluding yourself)
- Search users by username
- Real-time chat interface to send and receive messages
- Send messages by clicking Send or pressing Enter
- Logout functionality

## Technologies Used

- Frontend: React, Axios
- Backend: Express, MongoDB, Mongoose
- Authentication: JWT (JSON Web Tokens)
- Real-time messaging (optional): Socket.io (can be added)

## Setup and Run

### Backend

1. Clone the repository
2. Install dependencies:

   ```bash
   cd backend
   npm install
Create a .env file with the following variables:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Start the backend server:

bash
Copy
Edit
npm start
Frontend
Navigate to frontend folder

bash
Copy
Edit
cd frontend
Install dependencies:

bash
Copy
Edit
npm install
Start the React app:

bash
Copy
Edit
npm start
Open your browser and go to http://localhost:3000

Usage
Register a new user or login with existing credentials

After login, view the list of other users and click "Chat" to start chatting

Type messages and press Enter or click Send to send messages

Logout when finished

Future Improvements
Add real-time messaging with Socket.io

Improve UI/UX and responsiveness

Add message timestamps and read receipts

Enable user typing indicators

Feel free to contribute or raise issues!

mathematica
Copy
Edit

If you want, I can customize it further based on your exact folder structure or add instructions for Socket.io integr
