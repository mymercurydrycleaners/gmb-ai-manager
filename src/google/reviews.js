const { google } = require("googleapis");

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN
});

async function getReviews() {
  try {
    const mybusiness = google.mybusiness({
      version: "v4",
      auth: oauth2Client
    });

    const accounts = await mybusiness.accounts.list();

    if (!accounts.data.accounts || accounts.data.accounts.length === 0) {
      return {
        success: false,
        message: "No Google Business account found."
      };
    }

    const accountName = accounts.data.accounts[0].name;

    const locations = await mybusiness.accounts.locations.list({
      parent: accountName
    });

    if (!locations.data.locations || locations.data.locations.length === 0) {
      return {
        success: false,
        message: "No business location found."
      };
    }

    const locationName = locations.data.locations[0].name;

    const reviews = await mybusiness.accounts.locations.reviews.list({
      parent: locationName
    });

    return {
      success: true,
      location: locationName,
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
