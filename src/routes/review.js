const express = require("express");
const router = express.Router();

const { generateReply } = require("../ai/reviewReply");

router.get("/", async (req, res) => {

  try {

    const review = req.query.review;

    if (!review) {
      return res.status(400).json({
        success: false,
        message: "Missing ?review="
      });
    }

    const reply = await generateReply(review);

    res.json({
      success: true,
      review,
      reply
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message
    });

  }

});

module.exports = router;
