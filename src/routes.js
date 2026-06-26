const express = require("express");

const askRoute = require("./ask");
const statusRoute = require("./status");
const reviewRoute = require("./review");
const postRoute = require("./post");
const seoRoute = require("./seo");
const consultRoute = require("./consult");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    app: "Mercury GMB AI Manager",
    version: "3.1.0",
    status: "Running"
  });
});

router.get("/health", (req, res) => {
  res.json({
    success: true,
    status: "healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

router.use("/status", statusRoute);
router.use("/ask", askRoute);
router.use("/review", reviewRoute);
router.use("/post", postRoute);
router.use("/seo", seoRoute);
router.use("/consult", consultRoute);

module.exports = router;
