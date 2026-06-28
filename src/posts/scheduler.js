const cron = require("node-cron");
const { generatePost } = require("./generator");

function startPostScheduler() {

  console.log("✅ Google Post Scheduler Started");

  // Monday 10 AM
  cron.schedule("0 10 * * 1", () => {
    const post = generatePost("tips");

    console.log("Weekly Tip");
    console.log(post);
  });

  // Wednesday 10 AM
  cron.schedule("0 10 * * 3", () => {
    const post = generatePost("offers");

    console.log("Weekly Offer");
    console.log(post);
  });

  // Saturday 10 AM
  cron.schedule("0 10 * * 6", () => {
    const post = generatePost("festivals");

    console.log("Weekend Post");
    console.log(post);
  });

}

module.exports = {
  startPostScheduler
};
