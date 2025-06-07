const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Get all users except current logged-in user
router.get("/all", async (req, res) => {
  const currentUsername = req.query.currentUsername;

  try {
    const users = await User.find({ username: { $ne: currentUsername } }).select("username email");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
