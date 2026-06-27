const { google } = require("googleapis");

console.log("✅ NEW BUSINESS.JS LOADED");

async function getBusinessInfo() {
  try {
    // OAuth Client
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    });

    // Account Management API
    const accountApi = google.mybusinessaccountmanagement({
      version: "v1",
      auth: oauth2Client
    });

    // Business Information API
    const businessApi = google.mybusinessbusinessinformation({
      version: "v1",
      auth: oauth2Client
    });

    // Get Accounts
    const accountResponse = await accountApi.accounts.list();

    if (
      !accountResponse.data.accounts ||
      accountResponse.data.accounts.length === 0
    ) {
      return {
        success: false,
        message: "No Google Business account found."
      };
    }

    const account = accountResponse.data.accounts[0];

    // Get Locations
    const locationResponse = await businessApi.accounts.locations.list({
      parent: account.name
    });

    return {
      success: true,
      account: account,
      locations: locationResponse.data.locations || []
    };

  } catch (err) {
    return {
      success: false,
      error: err.message,
      stack: err.stack
    };
  }
}

module.exports = {
  getBusinessInfo
};
