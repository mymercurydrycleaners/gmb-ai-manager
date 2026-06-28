const oauth2Client = require("../google/client");

async function fetchReviews(locationName) {

  try {

    const response = await oauth2Client.request({
      url:
        "https://mybusiness.googleapis.com/v4/" +
        locationName +
        "/reviews"
    });

    return {
      success: true,
      reviews: response.data.reviews || []
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
  fetchReviews
};
