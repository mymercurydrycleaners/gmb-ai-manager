const express = require("express");

const askRoute = require("./ask");
const statusRoute = require("./status");
const googleRoute = require("./google");
const oauthRoute = require("./oauth");
const reviewsRoute = require("./reviews");
const dashboardRoute = require("./dashboard");

const router = express.Router();

// Home
router.get("/", (req, res) => {
  res.json({
    success: true,
    app: "Mercury GMB AI Manager",
    version: "3.0.0",
    status: "Running"
  });
});

// Health
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

module.exports = router;
