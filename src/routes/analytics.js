const express = require("express");

const router = express.Router();

const { getAnalytics } = require("../dashboard/analytics");

router.get("/", async (req, res) => {

  const data = await getAnalytics();

  res.json(data);

});

module.exports = router;
