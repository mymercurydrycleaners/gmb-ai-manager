const express = require("express");

const router = express.Router();

const { getSettings } = require("../settings");

router.get("/", (req, res) => {

  res.json(getSettings());

});

module.exports = router;
