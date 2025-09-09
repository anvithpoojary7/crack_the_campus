// backend/routes/auth.js
const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ success: false, msg: "User already exists" });

    const newUser = new User({ email, password, role });
    await newUser.save();

    res.json({ success: true, user: { email, role } });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ success: false, msg: "Invalid credentials" });
    }

    res.json({ success: true, user: { email: user.email, role: user.role } });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
});

module.exports = router;
