const express = require("express");

const router = express.Router();

const { generatePost } = require("../posts/generator");
const { publishPost } = require("../posts/publisher");

router.get("/generate", async (req, res) => {

  const type = req.query.type || "tips";

  const post = generatePost(type);

  res.json({
    success: true,
    post
  });

});

router.get("/publish", async (req, res) => {

  const type = req.query.type || "tips";

  const post = generatePost(type);

  const result = await publishPost(post);

  res.json(result);

});

module.exports = router;
