const express = require("express");

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
