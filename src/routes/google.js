const express = require("express");

const router = express.Router();

const { getBusinessInfo } = require("../google/business");
const { getGoogleStatus } = require("../google/oauth");
const { getAccounts } = require("../google/accounts");

// Google Status
router.get("/status", (req, res) => {

  res.json({
    success: true,
    google: getGoogleStatus()
  });

});

// Business Information
router.get("/business", async (req, res) => {

  try {

    const result = await getBusinessInfo();

    res.json(result);

  } catch (err) {

    res.status(500).json({
      success: false,
      error: err.message
    });

  }

});

// Google Accounts (REST API)
router.get("/accounts", async (req, res) => {

  try {

    const data = await getAccounts();

    res.json({
      success: true,
      data
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      error: err.message,
      details: err.response?.data || null
    });

  }

});

module.exports = router;
```
