const express = require("express");

const router = express.Router();

const { optimizeBusiness } = require("../seo/optimizer");

router.get("/", (req, res) => {

  res.json(
    optimizeBusiness()
  );

});

module.exports = router;

