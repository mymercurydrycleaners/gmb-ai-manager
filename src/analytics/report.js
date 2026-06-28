const { getTrends } = require("./trends");
const { analyzeSentiment } = require("./sentiment");
const { getBusinessSuggestions } = require("./recommendations");

async function generateAnalyticsReport(reviews = []) {

  const trends = getTrends(reviews);

  const sentiment = analyzeSentiment(reviews);

  return {

    success: true,

    trends,

    sentiment,

    suggestions: getBusinessSuggestions(trends)

  };

}

module.exports = {
  generateAnalyticsReport
};

