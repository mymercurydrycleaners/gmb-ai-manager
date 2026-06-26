const express = require("express");

const askRoute = require("./ask");
const statusRoute = require("./status");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    app: "Mercury GMB AI Manager",
    version: "3.0.0",
    status: "Running"
  });
});

router.get("/health", (req, res) => {
  res.json({
    success: true,
    status: "healthy",
    uptime: process.uptime()
  });
});

router.use("/ask", askRoute);

router.use("/status", statusRoute);

module.exports = router;
router.use("/google", require("./google"));
