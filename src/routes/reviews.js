const express = require("express");

const router = express.Router();

const { generateReply } = require("../ai/reviewGenerator");

// Health Check
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Reviews API is working",
    endpoints: [
      "POST /reviews/generate",
      "GET /reviews/live (Coming Soon)",
      "POST /reviews/reply (Coming Soon)"
    ]
  });
});

// AI Reply Generator
router.post("/generate", async (req, res) => {

  try {

    const { review, rating } = req.body;

    if (!review) {
      return res.status(400).json({
        success: false,
        message: "Review is required"
      });
    }

    const aiReply = await generateReply(review, rating || 5);

    res.json({
      success: true,
      review,
      rating: rating || 5,
      aiReply
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      error: err.message
    });

  }

});

module.exports = router;

