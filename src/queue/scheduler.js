const cron = require("node-cron");

const { processQueue } = require("./worker");

function startQueueScheduler() {

  console.log("Queue Scheduler Started");

  cron.schedule("* * * * *", async () => {

    await processQueue();

  });

}

module.exports = {
  startQueueScheduler
};

