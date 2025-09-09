// backend/routes/auth.js
const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { email, password, role, profile } = req.body;

    // basic validation
    if (!email || !password || !role) {
      return res.status(400).json({ message: "Email, password and role are required" });
    }

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // create new user
    const user = new User({
      email,
      password, // ⚠️ For hackathon simple version, no hashing. Use bcrypt in production.
      role,
      profile: profile || {}, // optional
    });

    await user.save();

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        profile: user.profile,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error" });
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
