const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    version: "3.1.0",
    server: "Running",
    gemini: process.env.GEMINI_API_KEY ? "Connected" : "Missing",
    uptime: process.uptime(),
    node: process.version,
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
