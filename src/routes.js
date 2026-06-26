const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    app: "GMB AI Manager",
    status: "Running"
  });
});

router.get("/health", (req, res) => {
  res.json({
    status: "healthy"
  });
});

module.exports = router;
