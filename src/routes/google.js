const express = require("express");
const { google } = require("googleapis");

const router = express.Router();

const { getGoogleStatus } = require("../google/oauth");
const { getBusinessInfo } = require("../google/business");
const { getReviews } = require("../google/reviews");

// GET /google/status
router.get("/status", (req, res) => {
  res.json({
    success: true,
    google: getGoogleStatus()
  });
});

// GET /google/token-test
router.get("/token-test", async (req, res) => {
  try {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    });

    const response = await oauth2Client.refreshAccessToken();

    res.json({
      success: true,
      credentials: response.credentials
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
      response: err.response?.data || null
    });
  }
});

// GET /google/business
router.get("/business", async (req, res) => {
  try {
    const data = await getBusinessInfo();
    res.json(data);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

// GET /google/reviews
router.get("/reviews", async (req, res) => {
  try {
    const data = await getReviews();
    res.json(data);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

module.exports = router;
