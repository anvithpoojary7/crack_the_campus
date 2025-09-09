const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config(); // load .env file

const app = express();
app.use(express.json());

// Connect MongoDB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Hello, Express + MongoDB Atlas is running!");
});



// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
