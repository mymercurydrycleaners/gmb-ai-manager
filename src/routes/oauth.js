const express = require("express");
const { google } = require("googleapis");

const router = express.Router();

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "https://gmb-ai-manager.onrender.com/oauth/callback"
);

// Login
router.get("/login", (req, res) => {

  console.log("CLIENT_ID:", process.env.GOOGLE_CLIENT_ID);
  console.log("CLIENT_SECRET:", process.env.GOOGLE_CLIENT_SECRET ? "FOUND" : "MISSING");

  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/business.manage"
    ]
  });

  console.log("AUTH URL:");
  console.log(url);

  res.redirect(url);
});

// Callback
router.get("/callback", async (req, res) => {
  try {

    const { code } = req.query;

    const { tokens } = await oauth2Client.getToken(code);

    res.json({
      success: true,
      refresh_token: tokens.refresh_token,
      access_token: tokens.access_token
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
