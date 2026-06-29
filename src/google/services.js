const { google } = require("googleapis");

const auth = require("./auth");

const businessInfo = google.mybusinessbusinessinformation({
  version: "v1",
  auth
});

const accountManagement = google.mybusinessaccountmanagement({
  version: "v1",
  auth
});

module.exports = {
  businessInfo,
  accountManagement
};

