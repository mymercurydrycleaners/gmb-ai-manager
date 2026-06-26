const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID ? "FOUND" : "MISSING",
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET ? "FOUND" : "MISSING",
    GOOGLE_REFRESH_TOKEN: process.env.GOOGLE_REFRESH_TOKEN ? "FOUND" : "MISSING"
  });
});

module.exports = router;
