const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    app: "GMB AI Manager",
    version: "1.1.0"
  });
});

router.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime()
  });
});

router.get("/status", (req, res) => {
  res.json({
    render: "online",
    claude: "Not Connected",
    googleSheets: "Not Connected",
    googleBusinessProfile: "Not Connected",
    whatsapp: "Not Connected"
  });
});

module.exports = router;
