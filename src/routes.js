const express = require("express");
const { askGemini } = require("./gemini");

const router = express.Router();

// Home
router.get("/", (req, res) => {
  res.json({
    success: true,
    app: "GMB AI Manager",
    version: "2.0.0",
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

// System Status
router.get("/status", (req, res) => {
  res.json({
    success: true,
    render: "online",
    gemini: process.env.GEMINI_API_KEY ? "Connected" : "Not Connected",
    googleBusinessProfile: "Coming Soon",
    googleSheets: "Coming Soon",
    whatsapp: "Coming Soon"
  });
});

// AI Ask Endpoint
router.get("/ask", async (req, res) => {
  try {
    const prompt = req.query.q;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Please provide ?q=your question"
      });
    }

    const answer = await askGemini(prompt);

    res.json({
      success: true,
      prompt,
      answer
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;
