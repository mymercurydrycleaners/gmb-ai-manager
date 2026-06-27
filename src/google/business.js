const { google } = require("googleapis");
console.log("✅ NEW BUSINESS.JS LOADED");
console.log("NEW BUSINESS.JS LOADED");
const { google } = require("googleapis");

async function getBusinessInfo() {
  try {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    });

    const business = google.mybusinessbusinessinformation({
      version: "v1",
      auth: oauth2Client
    });

    const accountsApi = google.mybusinessaccountmanagement({
      version: "v1",
      auth: oauth2Client
    });

    // Get Accounts
    const accounts = await accountsApi.accounts.list();

    if (!accounts.data.accounts || accounts.data.accounts.length === 0) {
      return {
        success: false,
        message: "No Google Business account found."
      };
    }

    const account = accounts.data.accounts[0];

    // Get Locations
    const locations = await business.accounts.locations.list({
      parent: account.name
    });

    return {
      success: true,
      account: account,
      locations: locations.data.locations || []
    };

  } catch (err) {
    return {
      success: false,
      error: err.message
    };
  }
}

module.exports = {
  getBusinessInfo
};
