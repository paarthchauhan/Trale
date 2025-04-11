import express from "express";
import authRoute from "./authRoutes.js";
import userRoute from "./userRoutes.js";
import postRoute from "./postRoutes.js";

const router = express.Router();

// Group all your route modules under base paths
router.use("/auth", authRoute);   // Handles /api/auth/*
router.use("/users", userRoute);  // Handles /api/users/*
router.use("/posts", postRoute);  // Handles /api/posts/*

// Optional base route for testing
router.get("/", (req, res) => {
  res.send("Welcome to the API root!");
});

export default router;
