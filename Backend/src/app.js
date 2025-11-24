import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes Example
app.get("/", (req, res) => {
  res.send("Backend Running...");
});

export default app;
