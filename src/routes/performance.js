const express = require("express");

const router = express.Router();

const {

  getPerformanceInsights

} = require("../performance/service");

router.get("/", async (req, res) => {

  const result = await getPerformanceInsights();

  res.json(result);

});

module.exports = router;

