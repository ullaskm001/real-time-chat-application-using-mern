# Real-Time Chat Application

A full-stack real-time chat app built with React (frontend), Express (backend), and MongoDB.  
Supports user registration/login, viewing other users, and chatting.  
Messages can be sent by clicking **Send** or pressing **Enter**.

---

## Features

- User registration and login with username, email, and password  
- View list of registered users (excluding yourself)  
- Search users by username  
- Chat interface for sending and receiving messages  
- Send messages by clicking **Send** or pressing **Enter**  
- Logout functionality  

---

## Technologies Used

- **Frontend:** React, Axios  
- **Backend:** Express, MongoDB, Mongoose  
- **Authentication:** JWT (JSON Web Tokens)  

---

## Setup and Run

### Backend

1. Clone the repo  
2. Navigate to the backend folder and install dependencies:

   ```bash
   cd backend
   npm install
Create a .env file with these variables:

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
Navigate to the frontend folder and install dependencies:

bash
Copy
Edit
cd frontend
npm install
Start the React app:

bash
Copy
Edit
npm start
Open your browser at http://localhost:3000

Usage
Register or login

View and search users to chat with

Click Chat to open chat window

Send messages by clicking Send or pressing Enter

Logout when done

Future Improvements
Add real-time messaging with Socket.io

Improve UI/UX and responsiveness

Add message timestamps and read receipts

Enable typing indicators

Feel free to contribute or raise issues!
