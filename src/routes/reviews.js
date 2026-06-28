const { getReviews } = require("../google/reviews");
const express = require("express");

const router = express.Router();

const { generateReply } = require("../ai/reviewGenerator");

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Reviews API Working"
  });
});

router.post("/generate", async (req, res) => {
  try {
    const { review, rating } = req.body;

    if (!review) {
      return res.status(400).json({
        success: false,
        message: "Review is required"
      });
    }

    const reply = await generateReply(review, rating);

    res.json({
      success: true,
      review,
      rating,
      aiReply: reply
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

module.exports = router;
router.get("/live", async (req, res) => {

  try {

    const result = await getReviews();

    res.json(result);

  } catch (err) {

    res.status(500).json({
      success: false,
      error: err.message
    });

  }

});
