const express = require("express");
const router = express.Router();

const { askGemini } = require("../ai/gemini");

router.get("/", async (req, res) => {
  try {
    const q = req.query.q;

    if (!q) {
      return res.status(400).json({
        success: false,
        message: "Missing query parameter ?q="
      });
    }

    const answer = await askGemini(q);

    res.json({
      success: true,
      question: q,
      answer
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message
    });

  }
});

module.exports = router;
