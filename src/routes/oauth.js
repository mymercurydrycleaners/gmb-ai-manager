const express = require("express");
const { google } = require("googleapis");

const router = express.Router();

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "https://gmb-ai-manager.onrender.com/oauth/callback"
);

// Debug
router.get("/debug-client", (req, res) => {
  res.json({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecretLength: process.env.GOOGLE_CLIENT_SECRET
      ? process.env.GOOGLE_CLIENT_SECRET.length
      : 0
  });
});

// Login
router.get("/login", (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/business.manage"
    ]
  });

  res.redirect(url);
});

// Callback
router.get("/callback", async (req, res) => {
  try {
    const { code } = req.query;

    const { tokens } = await oauth2Client.getToken(code);

    res.json({
      success: true,
      tokens
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      details: err.response?.data || null
    });
  }
});

module.exports = router;
