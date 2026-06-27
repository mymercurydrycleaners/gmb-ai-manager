const { google } = require("googleapis");

async function getReviews() {
  try {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    });

    const accountApi = google.mybusinessaccountmanagement({
      version: "v1",
      auth: oauth2Client
    });

    const businessApi = google.mybusinessbusinessinformation({
      version: "v1",
      auth: oauth2Client
    });

    // Get Account
    const accounts = await accountApi.accounts.list();

    if (!accounts.data.accounts?.length) {
      return {
        success: false,
        message: "No Google Business Account Found"
      };
    }

    const account = accounts.data.accounts[0];

    // Get Location
    const locations = await businessApi.accounts.locations.list({
      parent: account.name
    });

    if (!locations.data.locations?.length) {
      return {
        success: false,
        message: "No Business Location Found"
      };
    }

    const location = locations.data.locations[0];

    // Business Profile API
    const profileApi = google.mybusiness({
      version: "v4",
      auth: oauth2Client
    });

    const reviews = await profileApi.accounts.locations.reviews.list({
      parent: location.name
    });

    return {
      success: true,
      account: account.accountName,
      location: location.title,
      total: reviews.data.reviews
        ? reviews.data.reviews.length
        : 0,
      reviews: reviews.data.reviews || []
    };

  } catch (err) {
    return {
      success: false,
      error: err.message
    };
  }
}

module.exports = {
  getReviews
};
