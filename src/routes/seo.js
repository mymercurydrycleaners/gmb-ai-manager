const express = require("express");

const router = express.Router();

const { runSeoAudit } = require("../seo/audit");

router.get("/", async (req, res) => {

  const result = await runSeoAudit({});

  res.json(result);

});

module.exports = router;

