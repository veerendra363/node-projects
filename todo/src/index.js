import express from "express";
import pool from "./config/db.js";   
const app = express();

// Basic test route
app.get("/", (req, res) => {
  res.send("Hello World 🌍 from Express!");
});

// Test route to check DB connection
app.get("/api/db-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ message: "✅ DB Connected", time: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "❌ DB connection error", error: err.message });
  }
});

// Middleware to parse JSON
app.use(express.json());

// Import routes
import userRoutes from './routes/userRoutes.js';

// Register routes with prefix
app.use("/api/users", userRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
