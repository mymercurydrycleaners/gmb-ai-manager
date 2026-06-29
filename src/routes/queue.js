const express = require("express");

const router = express.Router();

const {

  addJob,

  getJobs

} = require("../queue/queue");

router.get("/", (req, res) => {

  res.json({

    success: true,

    jobs: getJobs()

  });

});

router.post("/test", (req, res) => {

  addJob("TEST_JOB", {

    time: Date.now()

  });

  res.json({

    success: true,

    message: "Job Added"

  });

});

module.exports = router;
