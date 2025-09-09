// Load express
const express = require("express");
const app = express();

// Choose a port
const PORT = 3000;

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, Express Server is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
