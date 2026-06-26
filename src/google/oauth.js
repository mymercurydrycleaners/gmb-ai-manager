function getGoogleStatus() {
  return {
    connected: !!process.env.GOOGLE_CLIENT_ID &&
               !!process.env.GOOGLE_CLIENT_SECRET,
    hasRefreshToken: !!process.env.GOOGLE_REFRESH_TOKEN,
    clientId: process.env.GOOGLE_CLIENT_ID ? "Configured" : "Missing",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ? "Configured" : "Missing",
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN ? "Configured" : "Missing"
  };
}

module.exports = {
  getGoogleStatus
};
