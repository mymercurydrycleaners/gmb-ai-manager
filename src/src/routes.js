const express = require("express");
const { askGemini } = require("./gemini");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    app: "GMB AI Manager",
    version: "2.0.0"
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
    gemini: process.env.GEMINI_API_KEY ? "Connected" : "Not Connected",
    googleSheets: "Coming Soon",
    googleBusinessProfile: "Coming Soon",
    whatsapp: "Coming Soon"
  });
});

router.get("/ask", async (req, res) => {
  try {
    const prompt = req.query.q;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Missing query parameter ?q="
      });
    }

    const answer = await askGemini(prompt);

    res.json({
      success: true,
      prompt,
      answer
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

module.exports = router;
