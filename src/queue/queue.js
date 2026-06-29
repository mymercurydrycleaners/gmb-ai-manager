const jobs = [];

function addJob(type, payload = {}) {

  jobs.push({

    id: Date.now().toString(),

    type,

    payload,

    status: "PENDING",

    createdAt: new Date().toISOString()

  });

}

function getJobs() {
  return jobs;
}

function nextJob() {

  const job = jobs.find(j => j.status === "PENDING");

  if (!job)
    return null;

  job.status = "PROCESSING";

  return job;

}

function completeJob(id) {

  const job = jobs.find(j => j.id === id);

  if (job)
    job.status = "DONE";

}

module.exports = {
  addJob,
  getJobs,
  nextJob,
  completeJob
};

