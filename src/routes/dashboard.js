const express = require("express");

const router = express.Router();

const { getDashboard } = require("../dashboard/dashboard");

router.get("/", async (req, res) => {

  const dashboard = await getDashboard();

  res.json(dashboard);

});

module.exports = router;
