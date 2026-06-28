const oauth2Client = require("./client");
const { getAccounts } = require("./accounts");

async function getLocations() {

  try {

    const accountsData = await getAccounts();

    if (
      !accountsData.accounts ||
      accountsData.accounts.length === 0
    ) {
      return {
        success: false,
        message: "No Google Business account found."
      };
    }

    const account = accountsData.accounts[0];

    const response = await oauth2Client.request({
      url:
        "https://mybusinessbusinessinformation.googleapis.com/v1/" +
        account.name +
        "/locations"
    });

    return {
      success: true,
      account: account.name,
      locations: response.data.locations || []
    };

  } catch (err) {

    return {
      success: false,
      error: err.message,
      details: err.response?.data || null
    };

  }

}

module.exports = {
  getLocations
};

