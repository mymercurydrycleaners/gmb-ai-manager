const system = {

  reviewScheduler: "*/10 * * * *",

  postScheduler: "0 10 * * *",

  timezone: "Asia/Kolkata",

  environment: process.env.NODE_ENV || "production"

};

function getSystemSettings() {
  return system;
}

module.exports = {
  getSystemSettings
};

