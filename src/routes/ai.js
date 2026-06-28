const express = require("express");

const router = express.Router();

const {
  getAIStatus,
  getAIReport,
  getAISuggestions
} = require("../ai/controller");

router.get("/status", async (req, res) => {

  res.json(await getAIStatus());

});

router.get("/report", async (req, res) => {

  res.json(await getAIReport());

});

router.get("/suggest", async (req, res) => {

  res.json(await getAISuggestions());

});

module.exports = router;

