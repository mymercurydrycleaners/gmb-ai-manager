const express = require("express");

const askRoute = require("./ask");
const statusRoute = require("./status");
const googleRoute = require("./google");
const oauthRoute = require("./oauth");
const reviewsRoute = require("./reviews");
const dashboardRoute = require("./dashboard");
const analyticsRoute = require("./analytics");
const postsRoute = require("./posts");
const settingsRoute = require("./settings");

const router = express.Router();

// Home
router.get("/", (req, res) => {
  res.json({
    success: true,
    app: "Mercury GMB AI Manager",
    version: "4.0.0",
    status: "Running"
  });
});

// Health Check
router.get("/health", (req, res) => {
  res.json({
    success: true,
    status: "healthy",
    uptime: process.uptime()
  });
});

// Routes
router.use("/ask", askRoute);
router.use("/status", statusRoute);
router.use("/google", googleRoute);
router.use("/oauth", oauthRoute);
router.use("/reviews", reviewsRoute);
router.use("/dashboard", dashboardRoute);
router.use("/analytics", analyticsRoute);
router.use("/posts", postsRoute);
router.use("/settings", settingsRoute);

// 404
router.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found"
  });
});

module.exports = router;

