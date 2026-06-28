const oauth2Client = require("./client");

async function getAccounts() {

  const response = await oauth2Client.request({
    url: "https://mybusinessaccountmanagement.googleapis.com/v1/accounts"
  });

  return response.data;

}

module.exports = {
  getAccounts
};
