const { google } = require("googleapis");

async function replyToReview(reviewName, replyText) {
  try {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    });

    const business = google.mybusiness({
      version: "v4",
      auth: oauth2Client
    });

    const response = await business.accounts.locations.reviews.updateReply({
      name: reviewName,
      requestBody: {
        comment: replyText
      }
    });

    return {
      success: true,
      reply: response.data
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
  replyToReview
};
