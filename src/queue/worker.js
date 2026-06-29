 id="a8m2pc"
const {

  nextJob,

  completeJob

} = require("./queue");

const {

  processAIReply

} = require("./processor");

async function processQueue() {

  const job = nextJob();

  if (!job)
    return;

  switch (job.type) {

    case "AI_REPLY":

      await processAIReply(job);

      break;

    default:

      console.log("Unknown Job");

  }

  completeJob(job.id);

}

module.exports = {
  processQueue
};

