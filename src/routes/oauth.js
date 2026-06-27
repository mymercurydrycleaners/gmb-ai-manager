const express = require("express");
const { google } = require("googleapis");

const router = express.Router();

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  "https://gmb-ai-manager.onrender.com/oauth/callback"
);
router.get("/debug-client", (req, res) => {
  res.json({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecretLength: process.env.GOOGLE_CLIENT_SECRET
      ? process.env.GOOGLE_CLIENT_SECRET.length
      : 0
  });
});
