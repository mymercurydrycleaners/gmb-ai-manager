const express = require("express");

const router = express.Router();

const { getGoogleStatus } = require("../google/oauth");
const { getBusinessInfo } = require("../google/business");
const { getReviews } = require("../google/reviews");

// GET /google/status
router.get("/status", (req, res) => {
   ...
});
