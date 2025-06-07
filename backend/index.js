const express = require("express");
const http = require("http"); // <--- ADD THIS
const socketIO = require("socket.io"); // <--- ADD THIS
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const messageRoutes = require("./routes/messages");

const app = express();
const server = http.createServer(app); // <--- wrap express app
const io = socketIO(server, {
  cors: {
    origin: "http://localhost:3000", // your frontend
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);

// Mongoose connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.error(err));

// SOCKET.IO CONNECTION HANDLER
io.on("connection", (socket) => {
  console.log("User connected: " + socket.id);

  socket.on("sendMessage", ({ sender, receiver, message }) => {
    // Broadcast message to the receiver
    io.emit("receiveMessage", { sender, message }); // basic version
  });

  socket.on("disconnect", () => {
    console.log("User disconnected: " + socket.id);
  });
});
