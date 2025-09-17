const express = require("express");
const app = express();

// Basic test route
app.get("/", (req, res) => {
  res.send("Hello World 🌍 from Express!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
