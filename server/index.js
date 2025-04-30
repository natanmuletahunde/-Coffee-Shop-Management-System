const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const signupRoutes = require("./routes/signup");
const loginRoutes = require("./routes/login");
const homeRoute = require("./routes/homeRoute"); // ✅ Add this line

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// API routes
app.use("/api/auth/signup", signupRoutes);
app.use("/api/auth/login", loginRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Health Center API is running...");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
