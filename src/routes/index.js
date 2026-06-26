const express = require("express");

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

status: "healthy",

uptime: process.uptime()

});

});

module.exports = router;
