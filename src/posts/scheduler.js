const cron = require("node-cron");
const { generatePost } = require("./generator");
const { publishPost } = require("./publisher");

function startPostScheduler() {

  console.log("✅ Mercury Post Scheduler Started");

  cron.schedule("0 10 * * 1", async () => {

    const post = generatePost("tips");
    await publishPost(post);

  });

  cron.schedule("0 10 * * 3", async () => {

    const post = generatePost("offers");
    await publishPost(post);

  });

  cron.schedule("0 10 * * 6", async () => {

    const post = generatePost("festivals");
    await publishPost(post);

  });

}

module.exports = {
  startPostScheduler
};
