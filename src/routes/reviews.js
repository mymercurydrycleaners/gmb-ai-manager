const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Reviews route is working"
  });
});

router.post("/generate", (req, res) => {
  res.json({
    success: true,
    message: "Generate endpoint working"
  });
});

module.exports = router;
