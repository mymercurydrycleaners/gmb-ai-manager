router.get("/token-test", async (req, res) => {
  try {
    const { google } = require("googleapis");

    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    });

    const response = await oauth2Client.refreshAccessToken();

    res.json({
      success: true,
      credentials: response.credentials
    });

  } catch (err) {
    res.json({
      success: false,
      message: err.message,
      response: err.response?.data || null
    });
  }
});
