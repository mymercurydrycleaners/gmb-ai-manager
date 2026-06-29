const {

  nextJob,

  completeJob

} = require("./queue");

async function processQueue() {

  const job = nextJob();

  if (!job)
    return;

  console.log("Running Job :", job.type);

  await new Promise(resolve => setTimeout(resolve, 500));

  completeJob(job.id);

}

module.exports = {
  processQueue
};

