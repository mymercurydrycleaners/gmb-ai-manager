```javascript
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {

  res.json({
    success: true,
    message: "Mercury Google Posts Engine",
    version: "1.0.0",
    endpoints: [
      "GET /posts/generate",
      "GET /posts/publish",
      "GET /posts/schedule"
    ]
  });

});

router.get("/generate", (req, res) => {

  res.json({
    success: true,
    message: "Generator Coming Soon"
  });

});

router.get("/publish", (req, res) => {

  res.json({
    success: true,
    message: "Publisher Coming Soon"
  });

});

router.get("/schedule", (req, res) => {

  res.json({
    success: true,
    message: "Scheduler Coming Soon"
  });

});

module.exports = router;
```
