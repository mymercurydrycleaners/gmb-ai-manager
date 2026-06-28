const express = require("express");

const router = express.Router();

const { getDashboard } = require("../dashboard");

router.get("/", async (req, res) => {

  try {

    const dashboard = await getDashboard();

    res.json(dashboard);

  } catch (err) {

    res.status(500).json({
      success: false,
      error: err.message
    });

  }

});

module.exports = router;

