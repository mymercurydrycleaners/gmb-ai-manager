async function getBusinessInfo() {
  return {
    success: true,
    message: "Business API integration will be enabled in Phase 4B",
    businessName: "My Mercury Dry Cleaners",
    accountId: process.env.GOOGLE_ACCOUNT_ID || "Not Configured",
    locationId: process.env.GOOGLE_LOCATION_ID || "Not Configured"
  };
}

module.exports = {
  getBusinessInfo
};
