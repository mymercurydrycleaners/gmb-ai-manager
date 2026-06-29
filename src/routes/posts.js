const express = require("express");

const router = express.Router();

const {

  createGooglePost

} = require("../posts/service");

router.get("/generate", async (req, res) => {

  const category = req.query.category || "tips";

  const result = await createGooglePost(category);

  res.json(result);

});

module.exports = router;

