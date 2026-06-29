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
const aiRoute = require("./ai");
const seoRoute = require("./seo");
const queueRoute = require("./queue");
const performanceRoute = require("./performance");

const router = express.Router();

// Home
router.get("/", (req, res) => {
  res.json({
    success: true,
    app: "Mercury GMB AI Manager",
    version: "4.1.0",
    status: "Running",
    environment: process.env.NODE_ENV || "production",
    timestamp: new Date().toISOString()
  });
});

// Health Check
router.get("/health", (req, res) => {
  res.json({
    success: true,
    status: "healthy",
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    timestamp: new Date().toISOString()
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
router.use("/ai", aiRoute);
router.use("/seo", seoRoute);
router.use("/queue", queueRoute);
router.use("/performance", performanceRoute);

// 404
router.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found"
  });
});

module.exports = router;

